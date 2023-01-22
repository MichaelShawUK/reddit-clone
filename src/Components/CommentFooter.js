import "../css/comment-footer.css";
import Votes from "./Votes";
import commentIcon from "../assets/img/commentIcon.png";
import posts from "../data/posts";

function scrollToReplyBox() {
  const reply = document.querySelector(".reply textarea");
  reply.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => reply.focus(), 500);
}

const CommentFooter = ({ comment }) => {
  return (
    <div className="comment-footer">
      <Votes post={comment} />
      <div className="footer-comments" onClick={scrollToReplyBox}>
        <img src={commentIcon} alt=""></img>
        <div className="comment-num">Reply</div>
      </div>
    </div>
  );
};

export default CommentFooter;
