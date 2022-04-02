const answerKey = require("./answerKey.json");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

function calculateDistance(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

exports.checkIfCoordsCorrect = functions.https.onCall((data) => {
  let result = false;
  const xPercent = data.xPercent;
  const yPercent = data.yPercent;
  const levelID = data.levelID;
  const keyID = data.keyID;

  const answer = answerKey.find((answer) => {
    return answer.levelID === levelID && answer.keyID === keyID;
  });

  if (
    calculateDistance(xPercent, answer.xPercent, yPercent, answer.yPercent) <
    0.03
  ) {
    result = true;
  }
  return result;
});

exports.startTimer = functions.https.onCall(({ gameID, levelID }) => {
  let start = Date.now();
  db.collection("times").doc(gameID).set(
    {
      start,
      levelID,
    },
    { merge: true }
  );
});

exports.getTime = functions.https.onCall((gameID) => {
  const end = Date.now();
  const duration = db
    .collection("times")
    .doc(gameID)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      }
    })
    .then((data) => {
      const duration = end - data.start;
      db.collection("times").doc(gameID).set(
        {
          end,
          duration,
        },
        { merge: true }
      );
      return duration;
    });

  return duration;
});

exports.writeUsername = functions.https.onCall(({ gameID, username }) => {
  db.collection("times").doc(gameID).set(
    {
      username: username,
    },
    { merge: true }
  );
});

exports.getLeaderboard = functions.https.onCall(() => {
  const leaderboard = db
    .collection("times")
    .where("username", "!=", null)
    .get()
    .then((querySnapshot) => {
      let resultArr = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        resultArr.push({ ...doc.data(), gameID: doc.id });
      });
      return resultArr;
    });
  return leaderboard;
});

exports.fillDefaultLeaderboard = functions.https.onCall(() => {
  for (let i = 0; i < 50; i++) {
    const duration = Math.floor(Math.random() * 1000000);
    const levelID = Math.floor(Math.random() * 5);
    const username = "Player " + i;
    db.collection("times").doc(`${i}`).set(
      {
        start: Date.now(),
        end: 0,
        duration,
        levelID,
        username,
      },
      { merge: true }
    );
  }
});
