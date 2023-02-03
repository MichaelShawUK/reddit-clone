import "../css/new-post.css";
import { Form } from "react-router-dom";
import { useContext, useState } from "react";
import { LoggedInContext } from "../App";
import { getAuth } from "firebase/auth";
import subreddits from "../data/subreddits";
import rdefault from "../data/icons/subreddits/rdefault.png";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseInit";

async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  SubmitPost(data);
  return null;
}

async function SubmitPost(postdata) {
  let subreddit = null;
  let subredditName = null;
  if (postdata.subreddit.slice(0, 2) === "r/")
    subredditName = postdata.subreddit.slice(2);
  else subredditName = postdata.subreddit;

  if (subreddits[subredditName]) subreddit = subreddits[subredditName];
  else subreddit = { icon: rdefault, name: subredditName };

  console.log(subreddits[subreddit]);

  const post = {
    commentIds: [],
    downvotes: 0,
    id: null,
    img: null,
    subreddit: subreddit,
    text: postdata.text,
    time: Date.now(),
    title: postdata.title,
    upvotes: 1,
    user: getAuth().currentUser.displayName.split(" ").join(""),
  };

  console.log(post);
  const postRef = doc(collection(db, "posts"));
  await setDoc(postRef, post);
  const snapshot = await getDoc(postRef);
  await updateDoc(postRef, { id: snapshot.id });
}

const NewPost = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const [checked, setChecked] = useState(false);

  function handleContentType(e) {
    setChecked(e.target.checked);
  }

  return (
    <div id="new-post-container">
      <Form method="post" id="new-post" encType="multipart/form-data">
        <label>
          Title
          <input type="text" name="title" autoFocus></input>
        </label>
        <label>
          Subreddit
          <input type="text" name="subreddit"></input>
        </label>
        <div id="choose-content">
          <span>Add Text</span>
          <label className="switch">
            <input type="checkbox" onClick={handleContentType}></input>
            <span className="slider"></span>
          </label>
          <span>Upload Image</span>
        </div>
        {!checked && <textarea name="text"></textarea>}
        {checked && <input type="file" name="image"></input>}
        <button type="submit" id="submit-post-btn" disabled={!loggedIn}>
          Submit
        </button>
      </Form>
    </div>
  );
};

export default NewPost;
export { action };
