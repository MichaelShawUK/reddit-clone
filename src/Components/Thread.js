import "../css/thread.css";
import Card from "./Card";
import Reply from "./Reply";
import posts from "../data/posts";

const Thread = () => {
  return (
    <div className="thread">
      <div className="thread-container">
        <Card post={posts[4]} />
        <Reply />
      </div>
    </div>
  );
};
export default Thread;
