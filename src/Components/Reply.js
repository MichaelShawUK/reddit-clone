import { Form } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../App";
import "../css/reply.css";

const submitComment = (e, post) => {
  console.log(e);
  console.log(post);
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
