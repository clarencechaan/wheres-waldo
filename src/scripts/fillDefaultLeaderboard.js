import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";

const functions = getFunctions();
connectFunctionsEmulator(functions, "localhost", 5001);
const fillDefaultLeaderboard = httpsCallable(
  functions,
  "fillDefaultLeaderboard"
);

export default fillDefaultLeaderboard;
