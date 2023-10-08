
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIRosOt5JWPoLSaHaxsDL-sgpO-1UZnYU",
  authDomain: "assignment-event.firebaseapp.com",
  projectId: "assignment-event",
  storageBucket: "assignment-event.appspot.com",
  messagingSenderId: "597897054883",
  appId: "1:597897054883:web:714b0be0e1bb32fa13cd16"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;