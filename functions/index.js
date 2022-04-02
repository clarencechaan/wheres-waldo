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

exports.startTimer = functions.https.onCall((data) => {
  let gameID = data;
  let start = Date.now();
  db.collection("times").doc(gameID).set(
    {
      start: start,
    },
    { merge: true }
  );
});

exports.getTime = functions.https.onCall((data) => {
  let gameID = data;
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
          end: end,
          duration: duration,
        },
        { merge: true }
      );
      return duration;
    });

  return duration;
});
