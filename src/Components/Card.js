import "../css/card.css";
import Votes from "./Votes";
import CardHeader from "./CardHeader";
import PostPreview from "./PostPreview";

const Card = () => {
  return (
    <div className="card">
      <Votes />
      <CardHeader />
      <div className="post-title">
        I requested 8 bananas in my weekly grocery pickup order…. They gave me 8
        BUNCHES, and managed to only charge me $0.68 - the price of one single
        banana
      </div>
      <PostPreview />
      <div>post preview text/image</div>
      <div>card footer - comment count</div>
    </div>
  );
};

export default Card;
