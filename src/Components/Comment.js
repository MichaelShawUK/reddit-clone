import "../css/comment.css";
import CommentHeader from "./CommentHeader";
import CommentFooter from "./CommentFooter";

const Comment = () => {
  return (
    <div className="comment">
      <CommentHeader />
      <div className="comment-body">
        You're energetic, aren't ya?You're energetic, aren't ya?You're
        energetic, aren't ya?You're energetic, aren't ya?You're energetic,
        aren't ya?You're energetic, aren't ya?You're energetic, aren't ya?You're
        energetic, aren't ya?
      </div>
      <CommentFooter />
    </div>
  );
};

export default Comment;
