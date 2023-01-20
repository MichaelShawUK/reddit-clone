import "../css/home.css";
import Sorter from "./Sorter";
import Card from "./Card";
import posts from "../data/posts";

const post = posts[0];

const Home = () => {
  return (
    <div id="home">
      <div id="home-container">
        <div className="med" id="home-header">
          Popular posts
        </div>
        <Sorter />
        <Card post={post} />
      </div>
    </div>
  );
};

export default Home;
