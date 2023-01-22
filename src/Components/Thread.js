import "../css/thread.css";
import Card from "./Card";
import Reply from "./Reply";
import posts from "../data/posts";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import { db, addComment, readData } from "../firebaseInit";
import { collection, query, where, getDocs } from "firebase/firestore";
// import { rComments } from "../data/dummyComments";

// rComments.forEach((comment) => addComment(comment));

const Thread = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const container = [];
    console.log("useEffect running");
    const commentsRef = collection(db, "comments");
    const q = query(commentsRef, where("id", ">=", 0), where("id", "<=", 17));
    const result = getDocs(q);
    result.then((docs) => {
      docs.forEach((comment) => {
        container.push(comment.data());
      });
      console.log(container);
      setComments(container);
    });
  }, []);

  return (
    <div className="thread">
      <div className="thread-container">
        <Card post={posts[4]} />
        <Reply />
        {comments && comments.map((comment) => <Comment comment={comment} />)}
      </div>
    </div>
  );
};
export default Thread;
