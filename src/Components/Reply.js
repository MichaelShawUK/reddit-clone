import { Form } from "react-router-dom";
import "../css/reply.css";

const Reply = () => {
  return (
    <Form className="reply">
      <textarea placeholder="What are your thoughts?"></textarea>
      <button>Comment</button>
    </Form>
  );
};

export default Reply;
