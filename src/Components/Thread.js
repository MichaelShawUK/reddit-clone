import "../css/thread.css";
import Card from "./Card";
import Reply from "./Reply";
import posts from "../data/posts";
import Comment from "./Comment";
import { useEffect, useState } from "react";

const Thread = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/comments/post/18")
      .then(
        (result) => result.json(),
        (error) => console.log(error)
      )
      .then(
        (data) => setApiResponse(data),
        (error) => console.log(error)
      );
  }, []);

  useEffect(() => {
    if (apiResponse) {
      setComments(apiResponse.comments);
    }
    console.log(comments);
  }, [apiResponse]);

  return (
    <div className="thread">
      <div className="thread-container">
        <Card post={posts[4]} />
        <Reply />
        {comments &&
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    </div>
  );
};
export default Thread;
