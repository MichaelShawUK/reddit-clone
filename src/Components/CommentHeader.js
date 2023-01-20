import "../css/comment-header.css";
import timeElapsed from "../utils/timeElapsed";
import av1 from "../data/icons/users/av1.png";
import av2 from "../data/icons/users/av2.png";
import av3 from "../data/icons/users/av3.png";
import av4 from "../data/icons/users/av4.png";
import av5 from "../data/icons/users/av5.png";
import av6 from "../data/icons/users/av6.png";
import av7 from "../data/icons/users/av7.png";
import av8 from "../data/icons/users/av8.png";

const avatars = [av1, av2, av3, av4, av5, av6, av7, av8];

const avatar = avatars[Math.floor(Math.random() * avatars.length)];

const CommentHeader = ({ comment }) => {
  return (
    <div className="comment-header">
      <img className="user-icon" src={avatar} alt=""></img>
      <div className="user-name">{`u/disco`}</div>
      <div className="comment-info">{`${timeElapsed(1674248365000)}`}</div>
    </div>
  );
};

export default CommentHeader;
