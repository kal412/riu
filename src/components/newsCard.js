import "../styles/newsCard.css";

const News = ({ image, title }) => {
  return (
    <div className="news-card">
      <img src={image} alt="newsimage" />

      <div className="news-card__title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default News;
