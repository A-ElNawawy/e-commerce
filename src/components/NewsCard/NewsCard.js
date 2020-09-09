import React from 'react';
import './NewsCard.scss';

export default function NewsCard(
  {
    img,
    alt,
    newsTitle,
    poster,
    date
  }
) {
  return (
    <div className="NewsCard">
      <img src={img} alt={alt}></img>
      <p className="news-title">{newsTitle}</p>
      <h2 className="post-data">
        <i className="fa fa-user" aria-hidden="true"></i> {poster} |&nbsp;
        <i className="fa fa-calendar-o" aria-hidden="true"></i> {date}
      </h2>
    </div>
  );
};