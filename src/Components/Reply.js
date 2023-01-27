import { Form } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../App";
import "../css/reply.css";

const Reply = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  return (
    <Form className="reply">
      <textarea placeholder="What are your thoughts?"></textarea>
      <button disabled={!loggedIn} onClick={() => console.log("clicked")}>
        Comment
      </button>
    </Form>
  );
};

export default Reply;
