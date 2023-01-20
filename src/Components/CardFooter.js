import "../css/card-footer.css";
import Votes from "./Votes";
import commentIcon from "../assets/img/commentIcon.png";

const CardFooter = ({ post }) => {
  // console.log(post);
  return (
    <div className="card-footer">
      <Votes post={post} />
      <div className="footer-comments">
        <img src={commentIcon} alt=""></img>
        <div className="comment-num">{`${post.comments} Comments`}</div>
      </div>
    </div>
  );
};

export default CardFooter;
