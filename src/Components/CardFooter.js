import "../css/card-footer.css";
import Votes from "./Votes";
import commentIcon from "../assets/img/commentIcon.png";

const CardFooter = () => {
  return (
    <div className="card-footer">
      <Votes />
      <div className="footer-comments">
        <img src={commentIcon} alt=""></img>
        <div className="comment-num">283 Comments</div>
      </div>
    </div>
  );
};

export default CardFooter;
