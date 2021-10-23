import "../styles/workCard.css";

const Work = ({ image, title, description }) => {
  return (
    <div className="work-card">
      <div className="work-card__text">
        <div className="work-card__title">
          <p>{title}</p>
        </div>

        <div className="work-card__description">
          <p>{description}</p>
        </div>

        <button className="view-project">View Project</button>
      </div>

      <div className="work-card__image">
        <img src={image} alt="workimage" />
      </div>
    </div>
  );
};

export default Work;
