import React from 'react';
import './CallUs.scss';

export default function CallUs(
  {
    icon,
    title,
    children
  }
) {
  return (
    <div className="CallUs">
      <i className={icon}></i>
      <div>
        <h3 className="title">{title}</h3>
        {children}
      </div>
    </div>
  );
};