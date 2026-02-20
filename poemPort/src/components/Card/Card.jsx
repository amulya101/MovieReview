import React from "react";
import './Card.scss';
import { Link } from "react-router-dom";

export default function Card({ image, link, description }) {
  return (
    <div className="cardCtn">
      <div className="cardCtn__image">
        {(image && link) && (
          <Link to={link}>
            <img src={image} alt="Card" className="card-image" />
          </Link>
       )}
      </div>
      <div className="cardCtn__body">
        <p>{description && (description)}</p>
        {link && (
          <Link to={link} className="card-link">      
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
}
