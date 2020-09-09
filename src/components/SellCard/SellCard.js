import React from 'react';
import './SellCard.scss';

export default function SellCard(
  {
    img,
    alt,
    quantity,
    product
  }
) {
  return (
    <div className="SellCard">
      <img src={img} alt={alt}></img>
      <h2 className="quantity">{quantity}</h2>
      <h3 className="product">{product}</h3>
    </div>
  );
};