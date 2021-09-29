import Viewer from "./home-viewer";
import ararat from "../../icons/ararat.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <img src={ararat} alt="" style={{ width: "-webkit-fill-available" }} />
      </div>
      <Viewer />
    </div>
  );
};

export default Home;
