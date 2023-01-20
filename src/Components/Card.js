import "../css/card.css";
import Votes from "./Votes";
import CardHeader from "./CardHeader";
import PostPreview from "./PostPreview";
import CardFooter from "./CardFooter";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Votes post={post} />
      <CardHeader post={post} />
      <div className="post-title">{post.title}</div>
      <PostPreview post={post} />
      <CardFooter post={post} />
    </div>
  );
};

export default Card;
