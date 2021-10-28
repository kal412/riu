import { Link } from "react-router-dom";
import "../styles/eventsCard.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";

const Events = ({ date, month, day, title, description, image }) => {
  return (
    <div className="events-card">
      <div className="datestamp">
        <p className="date">{date}</p>
        <p className="month">{month}</p>
        <p className="day">{day}</p>
      </div>

      <div className="events-text">
        <p className="title">{title}</p>
        <span>
          <LocationOnIcon className="icons" />
          RIU <EventIcon className="icons" />
          Events
        </span>
        <p className="description">{description}</p>
        <Link to="#">Read More</Link>
      </div>

      <div className="events-image">
        <img src={image} alt="eventsimage" />
      </div>
    </div>
  );
};

export default Events;
