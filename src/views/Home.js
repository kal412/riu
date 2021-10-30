import "../styles/home.css";
import dataSlider from "../components/dataSlider";
import Card from "../components/whatWeDoCard";
import Work from "../components/workCard";
import Button from "../components/viewAllButton";

import { useState } from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import News from "../components/newsCard";
import Events from "../components/eventsCard";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="home push-to-top">
      {/* Video Slider */}
      <div className="carousel-container">
        {dataSlider.map((obj, index) => {
          return (
            <video
              key={obj.id}
              className={
                slideIndex === index + 1
                  ? "video-slider active"
                  : "video-slider"
              }
              src={process.env.PUBLIC_URL + `/video/${index + 1}.mp4`}
              autoPlay
              muted
              loop
            ></video>
          );
        })}

        <div className="content">
          <h1>
            <span>RIU</span>
          </h1>
          <h3>
            <span>Research and Innovation Unit</span>
          </h3>
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              enim veritatis perferendis atque itaque id. Repellendus, saepe
              quae! Dolore ipsa consequuntur modi expedita distinctio, iste
              alias labore voluptatum facilis! Corporis quo aliquam doloribus
              suscipit quasi ad atque molestias iusto. Nam?
            </span>
          </p>
          <Link to="#">Read More</Link>
        </div>

        <div className="media-icons">
          <FacebookIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
        </div>

        <div className="slider-navigation">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={
                slideIndex === index + 1 ? "nav-btn active" : "nav-btn"
              }
            ></div>
          ))}
        </div>
      </div>

      {/* What We Do Section */}
      <div className="whatWe-do">
        <h1>What We Do</h1>

        <div className="whatWe-do__row">
          <Card
            image="./images/research.jpg"
            title="Lorem, ipsum."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas asperiores laudantium minima, similique sunt!"
          />
          <Card
            image="./images/research.jpg"
            title="Lorem, ipsum."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas asperiores laudantium minima, similique sunt!"
          />
          <Card
            image="./images/research.jpg"
            title="Lorem, ipsum."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas asperiores laudantium minima, similique sunt!"
          />
        </div>

        <div className="whatWe-do__row">
          <Card
            image="./images/research.jpg"
            title="Lorem, ipsum."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas asperiores laudantium minima, similique sunt!"
          />
          <Card
            image="./images/research.jpg"
            title="Lorem, ipsum."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas asperiores laudantium minima, similique sunt!"
          />
          <Card
            image="./images/research.jpg"
            title="Lorem, ipsum."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas asperiores laudantium minima, similique sunt!"
          />
        </div>
      </div>

      {/* Our Work Section */}
      <div className="our-work">
        <h1>Our Latest Works</h1>

        <div className="view-button">
          <Button />
        </div>

        <Work
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique rerum laudantium sequi eius esse! Hic, itaque a accusantium nulla ex quo repellendus dolorem aliquid quisquam eum veniam. Aliquid laboriosam vel similique nobis in veritatis unde commodi cupiditate voluptate ipsum vitae corrupti repellat mollitia, quos ullam reprehenderit fugiat deleniti fugit delectus."
          image="./images/robot.jpg"
        />

        <Work
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique rerum laudantium sequi eius esse! Hic, itaque a accusantium nulla ex quo repellendus dolorem aliquid quisquam eum veniam. Aliquid laboriosam vel similique nobis in veritatis unde commodi cupiditate voluptate ipsum vitae corrupti repellat mollitia, quos ullam reprehenderit fugiat deleniti fugit delectus."
          image="./images/3dprint.jpg"
        />

        <Work
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique rerum laudantium sequi eius esse! Hic, itaque a accusantium nulla ex quo repellendus dolorem aliquid quisquam eum veniam. Aliquid laboriosam vel similique nobis in veritatis unde commodi cupiditate voluptate ipsum vitae corrupti repellat mollitia, quos ullam reprehenderit fugiat deleniti fugit delectus."
          image="./images/robot.jpg"
        />
      </div>

      {/* News Section */}
      <div className="news">
        <h1>News</h1>

        <div className="view-button">
          <Button />
        </div>

        <div className="news-row">
          <News title="Lorem ipsum dolor sit." image="./images/news.jpg" />
          <News title="Lorem ipsum dolor sit." image="./images/news.jpg" />
          <News title="Lorem ipsum dolor sit." image="./images/news.jpg" />
        </div>
      </div>

      {/* Events Section */}
      <div className="events">
        <h1>Events</h1>

        <div className="view-button">
          <Button />
        </div>

        <Events
          date="11"
          month="OCT,2021"
          day="Monday"
          title=" Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum placeat expedita eligendi. Libero, at molestiae!"
          image="./images/events.jpg"
        />

        <hr />

        <Events
          date="11"
          month="OCT,2021"
          day="Monday"
          title=" Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum placeat expedita eligendi. Libero, at molestiae!"
          image="./images/events.jpg"
        />

        <hr />

        <Events
          date="11"
          month="OCT,2021"
          day="Monday"
          title=" Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum placeat expedita eligendi. Libero, at molestiae!"
          image="./images/events.jpg"
        />
      </div>

      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="newsletter-image">
          <ContactMailIcon className="newsletter-icon" fontSize="large" />
        </div>

        <div className="newsletter-description">
          <div className="newsletter-head">
            <p>Signup for Newsletter</p>
          </div>

          <div className="newsletter-body">
            <p>Subscribe now and receive weekly newsletter with new updates</p>
          </div>
        </div>

        <div className="newsletter-submit">
          <input type="email" placeholder="Enter your email..." />

          <button> Submit </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
