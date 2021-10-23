import { Link } from "react-router-dom";
import "../styles/eventsCard.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";

const Events = ({ date, month, day, title, description, image }) => {
  return (
    <div className="events-card">
      <div className="datestamp">
        <p>{date}</p>
        <p>{month}</p>
        <p>{day}</p>
      </div>

      <div className="events-text">
        <p>{title}</p>
        <p>{description}</p>
        <span>
          <LocationOnIcon />
          RIU <EventIcon />
          Events
        </span>
        <Link to="#">Read More</Link>
      </div>

      <div className="events-image">
        <img src={image} alt="eventsimage" />
      </div>
    </div>
  );
};

export default Events;
