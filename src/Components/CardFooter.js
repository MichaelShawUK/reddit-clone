import "../css/card-footer.css";
import Votes from "./Votes";
import commentIcon from "../assets/img/commentIcon.png";

const CardFooter = ({ post }) => {
  return (
    <div className="card-footer">
      <Votes post={post} />
      <div className="footer-comments">
        <img src={commentIcon} alt=""></img>
        <div className="comment-num">{`${post.commentIds.length} Comments`}</div>
      </div>
    </div>
  );
};

export default CardFooter;
