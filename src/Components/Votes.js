import "../css/votes.css";

const Votes = ({ post }) => {
  return (
    <div className="votes">
      <button className="upvote vote"></button>
      <div className="vote-num">{post.upvotes - post.downvotes}</div>
      <button className="downvote vote"></button>
    </div>
  );
};

export default Votes;
