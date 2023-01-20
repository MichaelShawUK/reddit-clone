import "../css/home.css";
import Sorter from "./Sorter";
import Card from "./Card";
import posts from "../data/posts";

const post1 = posts[0];
const post2 = posts[1];
const post3 = posts[2];
const post4 = posts[3];

const Home = () => {
  return (
    <div id="home">
      <div id="home-container">
        <div className="med" id="home-header">
          Popular posts
        </div>
        <Sorter />
        <Card post={post1} />
        <Card post={post2} />
        <Card post={post3} />
        <Card post={post4} />
      </div>
    </div>
  );
};

export default Home;
