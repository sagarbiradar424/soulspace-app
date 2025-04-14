import React from "react";
 import './ProblemCard.css';
const ProblemCard = ({ title, quote, videoUrl, caption }) => {
  return (
    <div className="problem-card" data-aos="fade-up">
      {" "}
      <div className="video-container">
        {" "}
        <iframe
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />{" "}
      </div>{" "}
      <div className="quote-content">
        {" "}
        <h2>{title}</h2> <p className="quote">“{quote}”</p>{" "}
        <p className="caption">{caption}</p>{" "}
      </div>{" "}
    </div>
  );
};

export default ProblemCard;
