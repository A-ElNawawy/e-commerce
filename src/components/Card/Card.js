import React from 'react';
import './Card.scss';

export default function Card(
  {
    productImg,
    productAlt,
    productName,
    productDescription,
    productRate,
    oldPrice,
    newPrice,
    discount,
    availability,
    countDown,
    days,
    hours,
    mins,
    sec
  }
) {
  return (
    <div className="Card">
      <img src={productImg} alt={productAlt}></img>
      <div className="product-info">
        <h3 className="product-name">{productName}</h3>
        <h2 className="product-description">{productDescription}</h2>
        <div className="product-rate">{productRate}</div>
        <div className="product-price">
          <span className="old-price">{oldPrice} </span>
          <span className="new-price">{newPrice} </span>
          <span className="discount badge">{discount}</span>
        </div>
        {
          availability?
            <p className="availability">Availability: <span className="amount">{availability}</span></p>
          :
            null
        }
        {
          countDown?
            <div className="Offers-ends-in">
              <p>Hurry Up! Offers ends in:</p>
              <div className="down-timer">
                <h2><span>{days}</span>:<span>{hours}</span>:<span>{mins}</span>:<span>{sec}</span></h2>
                <h3><span>days</span> <span>hours</span> <span>mins</span> <span>sec</span></h3>
              </div>
            </div>
          :
          null
        }
      </div>
    </div>
  );
};