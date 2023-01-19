import "../css/card-header.css";
import sub1 from "../assets/img/sub1.png";
import sub2 from "../assets/img/sub2.png";
import sub3 from "../assets/img/sub3.png";
import sub4 from "../assets/img/sub4.png";
import sub5 from "../assets/img/sub5.png";
import sub6 from "../assets/img/sub6.png";
import sub7 from "../assets/img/sub7.png";
import sub8 from "../assets/img/sub8.png";
import sub9 from "../assets/img/sub9.png";
import sub10 from "../assets/img/sub10.png";
import sub11 from "../assets/img/sub11.png";
import sub12 from "../assets/img/sub12.png";

const subIcons = [
  sub1,
  sub2,
  sub3,
  sub4,
  sub5,
  sub6,
  sub7,
  sub8,
  sub9,
  sub10,
  sub11,
  sub12,
];
const icon = subIcons[Math.floor(Math.random() * subIcons.length)];

const CardHeader = () => {
  return (
    <div className="card-header">
      <img className="subreddit-icon" src={icon} alt=""></img>
      <div className="subreddit-name">r/subredditName</div>
      <div className="post-info">Posted by ---user--- ---n time--- ago</div>
    </div>
  );
};

export default CardHeader;
