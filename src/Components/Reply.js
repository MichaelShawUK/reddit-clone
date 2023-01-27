import { Form } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../App";
import { getAuth } from "firebase/auth";
import "../css/reply.css";

const submitComment = (e, post) => {
  const comment = {
    body: e.target.form[0].value,
    downvotes: 0,
    id: null,
    postId: post.id,
    time: Date.now(),
    upvotes: 1,
    user: {
      id: null,
      username: getAuth().currentUser.displayName.split(" ").join(""),
    },
  };
  console.log(comment);
};

const Reply = ({ post }) => {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  return (
    <Form className="reply">
      <textarea placeholder="What are your thoughts?"></textarea>
      <button
        type="submit"
        disabled={!loggedIn}
        onClick={(e) => submitComment(e, post)}
      >
        Comment
      </button>
    </Form>
  );
};

export default Reply;
