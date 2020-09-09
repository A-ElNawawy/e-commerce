import React from 'react';
import './HotDealCard.scss';
import Card from '../Card/Card';

export default function HotDealCard(
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
    <div className="HotDealCard">
      <Card 
        productImg={productImg}
        productAlt={productAlt}
        productName={productName}
        productDescription={productDescription}
        productRate={productRate}
        oldPrice={oldPrice}
        newPrice={newPrice}
        discount={discount}
        availability={availability}
        countDown={countDown}
        days={days}
        hours={hours}
        mins={mins}
        sec={sec}
      />
    </div>
  );
};