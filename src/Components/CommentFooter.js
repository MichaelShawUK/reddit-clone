import "../css/comment-footer.css";
import Votes from "./Votes";
import commentIcon from "../assets/img/commentIcon.png";
import posts from "../data/posts";

const votesplaceholder = posts[0];

const CommentFooter = () => {
  return (
    <div className="comment-footer">
      <Votes post={votesplaceholder} />
      <div className="footer-comments">
        <img src={commentIcon} alt=""></img>
        <div className="comment-num">Reply</div>
      </div>
    </div>
  );
};

export default CommentFooter;
