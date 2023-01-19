import "../css/home.css";
import Sorter from "./Sorter";

const Home = () => {
  return (
    <div id="home">
      <div id="home-container">
        <div className="med" id="home-header">
          Popular posts
        </div>
        <Sorter />
      </div>
    </div>
  );
};

export default Home;
