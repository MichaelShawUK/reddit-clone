import "../css/home.css";
import Sorter from "./Sorter";
import Card from "./Card";

const Home = () => {
  return (
    <div id="home">
      <div id="home-container">
        <div className="med" id="home-header">
          Popular posts
        </div>
        <Sorter />
        <Card />
      </div>
    </div>
  );
};

export default Home;
