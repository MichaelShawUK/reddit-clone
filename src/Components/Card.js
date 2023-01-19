import "../css/card.css";
import Votes from "./Votes";
import CardHeader from "./CardHeader";
import PostPreview from "./PostPreview";
import CardFooter from "./CardFooter";

const Card = () => {
  return (
    <div className="card">
      <Votes />
      <CardHeader />
      <div className="post-title">
        What is something you stopped buying due to price increases?
      </div>
      <PostPreview />
      <CardFooter />
    </div>
  );
};

export default Card;
