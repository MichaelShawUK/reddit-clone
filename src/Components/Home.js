import "../css/home.css";
import Sorter from "./Sorter";
import Card from "./Card";
import posts from "../data/posts";

const Home = () => {
  return (
    <div id="home">
      <div id="home-container">
        <div className="med" id="home-header">
          Popular posts
        </div>
        <Sorter />
        {posts.map((post, index) => {
          return <Card key={index} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Home;
