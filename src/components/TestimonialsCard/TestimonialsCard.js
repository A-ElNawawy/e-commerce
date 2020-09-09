import React from 'react';
import './TestimonialsCard.scss';

export default function TestimonialsCard(
  {
    img,
    alt,
    name,
    address,
    customerOpinion
  }
) {
  return (
    <div className="TestimonialsCard">
      <img src={img} alt={alt}></img>
      <div>
        <h2 className="name">{name}</h2>
        <h3 className="address">{address}</h3>
      </div>
      <div className="rate">stars</div>
      <p className="customer-opinion">{customerOpinion}</p>
    </div>
  );
};