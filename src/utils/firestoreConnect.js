import {
  collection,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseInit";

async function updateDocById(docId) {
  const docRef = doc(db, "posts", docId);
  await updateDoc(docRef, { id: docId });
}

async function getDocById(id) {
  const commentsRef = collection(db, "comments");
  const q = query(commentsRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  // console.log(querySnapshot);
  for (let document of querySnapshot.docs) {
    console.log(document.id);
  }
}

export { updateDocById, getDocById };
