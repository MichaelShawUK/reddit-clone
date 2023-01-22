// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa3zKU1NULuPJkULveC6pZRxsKg_Z2R9M",
  authDomain: "rclone-523cd.firebaseapp.com",
  projectId: "rclone-523cd",
  storageBucket: "rclone-523cd.appspot.com",
  messagingSenderId: "333783632007",
  appId: "1:333783632007:web:29893ee0b5e79066325022",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addComment(comment) {
  await addDoc(collection(db, "comments"), comment);
}

async function addPost(post) {
  await addDoc(collection(db, "posts"), post);
}

async function readData(collectionName) {
  console.log("reading from firestore");
  const docs = await getDocs(collection(db, collectionName));
  const data = [];
  docs.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
}

export { db, addPost, addComment, readData };
