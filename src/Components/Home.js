import "../css/home.css";
import Sorter from "./Sorter";
import Card from "./Card";
// import posts from "../data/posts";
import { useEffect, useState } from "react";
import { addPost, readData } from "../firebaseInit";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
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
  });

  return (
    <div id="home">
      <div id="home-container">
        <div className="med" id="home-header">
          Popular posts
        </div>
        <Sorter />
        {posts.map((post) => {
          return <Card post={post} />;
        })}
      </div>
    </div>
  );
};

export default Home;
