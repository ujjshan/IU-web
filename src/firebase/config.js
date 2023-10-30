
// firebase configuration

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLV2XDtzi9CB-99iRK2HojyNND2LAWQB8",
  authDomain: "portfolio-dfc0e.firebaseapp.com",
  databaseURL: "https://portfolio-dfc0e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-dfc0e",
  storageBucket: "portfolio-dfc0e.appspot.com",
  messagingSenderId: "1020519011017",
  appId: "1:1020519011017:web:9ac704267a282cc28d3318",
  measurementId: "G-T6CQVXQC9L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db, analytics};