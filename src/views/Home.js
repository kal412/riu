import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1>
          RIU
          <br />
          <span>Research and Innovation Unit</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, enim
          veritatis perferendis atque itaque id. Repellendus, saepe quae! Dolore
          ipsa consequuntur modi expedita distinctio, iste alias labore
          voluptatum facilis! Corporis quo aliquam doloribus suscipit quasi ad
          atque molestias iusto. Nam?
        </p>
        <Link to="#">Read More</Link>
      </div>

      <div className="media__icons">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default Home;
