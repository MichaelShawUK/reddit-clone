import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebaseInit";

async function getDocDbId(id) {
  console.log(`Updating comment id: ${id}`);
  const commentsRef = collection(db, "comments");
  const q = query(commentsRef, where("id", "==", id));
  const snap = await getDocs(q);
  const document = snap.docs[0];
  return document.id;
}

async function updateCommentId(dbId) {
  const docRef = doc(db, "comments", dbId);
  await updateDoc(docRef, { id: dbId });
}

async function getCollectionDocs() {
  const snap = await getDocs(collection(db, "comments"));
  snap.forEach((document) => updateCommentTime(document.id));
}

async function updateCommentTime(id) {
  console.log(`Updating doc: ${id}`);
  const docRef = doc(db, "comments", id);
  await updateDoc(docRef, {
    time: Date.now() - Math.floor(Math.random() * 15897792619),
  });
}

export { getDocDbId, updateCommentId, getCollectionDocs };
