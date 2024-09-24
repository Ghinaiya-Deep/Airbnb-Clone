import React from 'react';
import './Card.css';

const Card = ({ image, title, price, location }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{location}</p>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
};

export default Card;
