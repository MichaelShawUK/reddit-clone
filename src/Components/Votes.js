import "../css/votes.css";

const Votes = () => {
  return (
    <div className="votes">
      <button className="upvote vote"></button>
      <div className="vote-num">179</div>
      <button className="downvote vote"></button>
    </div>
  );
};

export default Votes;
