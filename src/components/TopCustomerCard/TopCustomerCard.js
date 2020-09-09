import React from 'react';
import './TopCustomerCard.scss';

export default function TopCustomerCard(
  {
    img,
    alt,
    heSays,
    name,
    address
  }
) {
  return (
    <div className="TopCustomerCard">
      <h4>Today's Top Customer</h4>
      <img src={img} alt={alt}></img>
      <p className="he-says">{heSays}</p>
      <div>
        <h2 className="name">{name}</h2>
        <h3 className="address">{address}</h3>
      </div>
    </div>
  );
};