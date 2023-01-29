import "../css/votes.css";

const Votes = ({ post, voteClick }) => {
  return (
    <div className="votes">
      <button className="upvote vote" onClick={voteClick}></button>
      <div className="vote-num">{post.upvotes - post.downvotes}</div>
      <button className="downvote vote" onClick={voteClick}></button>
    </div>
  );
};

export default Votes;
