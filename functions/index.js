const answerKey = require("./answerKey.json");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.addMessage = functions.https.onCall((data, context) => {
  // ...
});

function calculateDistance(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

// [START allAdd]
// [START addFunctionTrigger]
// Adds two numbers to each other.
exports.checkIfCoordsCorrect = functions.https.onCall((data) => {
  // [END addFunctionTrigger]
  // [START readAddData]
  // Numbers passed from the client.
  let result = false;
  const xPercent = data.xPercent;
  const yPercent = data.yPercent;
  const levelID = data.levelID;
  const keyID = data.keyID;
  // [END readAddData]

  // [START addHttpsError]
  // Checking that attributes are present and are numbers.
  // if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
  //   // Throwing an HttpsError so that the client gets the error details.
  //   throw new functions.https.HttpsError(
  //     "invalid-argument",
  //     "The function must be called with " +
  //       'two arguments "firstNumber" and "secondNumber" which must both be numbers.'
  //   );
  // }
  // [END addHttpsError]

  const answer = answerKey.find((answer) => {
    return answer.levelID === levelID && answer.keyID === keyID;
  });

  if (
    calculateDistance(xPercent, answer.xPercent, yPercent, answer.yPercent) <
    0.03
  ) {
    result = true;
  }

  // [START returnAddData]
  // returning result.
  return result;
  // [END returnAddData]
});
// [END allAdd]
