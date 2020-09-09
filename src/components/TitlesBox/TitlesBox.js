import React from 'react';
import './TitlesBox.scss';

export default function TitlesBox(
  {
    title,
    subTitle
  }
) {
  return (
    <div className="TitlesBox">
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
    </div>
  );
};