import "../css/home.css";
import Sorter from "./Sorter";
import Card from "./Card";
import { Link } from "react-router-dom";
// import posts from "../data/posts";
import { useEffect, useState, useContext } from "react";
import { LoggedInContext } from "../App";
import { addPost, readData } from "../firebaseInit";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  useEffect(() => {
    //Infinite loop due to sort method changing obj reference??
    console.log("reading posts");
    const data = readData("posts");
    data.then((res) => {
      // Sorts posts by highest vote count
      res.sort((a, b) => {
        const aVotes = a.upvotes - a.downvotes;
        const bVotes = b.upvotes - b.downvotes;
        return bVotes - aVotes;
      });
      setPosts(res);
    });
  }, []);

  return (
    <div id="home">
      <div id="home-container">
        <div className="space-between">
          <div className="med" id="home-header">
            Popular posts
          </div>
          <button id="new-post">New Post</button>
        </div>
        <Sorter />
        {posts.map((post) => {
          return (
            <Link to={`/${post.id}`} key={post.id}>
              <Card key={post.id} post={post} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
