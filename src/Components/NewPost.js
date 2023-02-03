import "../css/new-post.css";
import { Form } from "react-router-dom";
import { useState } from "react";

const NewPost = () => {
  const [checked, setChecked] = useState(false);

  function handleContentType(e) {
    console.log(e.target.checked);
    setChecked(e.target.checked);
  }

  return (
    <div id="new-post-container">
      <Form id="new-post">
        <label>
          Title
          <input type="text" autoFocus></input>
        </label>
        <label>
          Subreddit
          <input type="text"></input>
        </label>
        <div id="choose-content">
          <span>Add Text</span>
          <label className="switch">
            <input type="checkbox" onClick={handleContentType}></input>
            <span className="slider"></span>
          </label>
          <span>Upload Image</span>
        </div>
        {!checked && <textarea></textarea>}
        {checked && <input type="file"></input>}
        <button type="submit" id="submit-post-btn">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default NewPost;
