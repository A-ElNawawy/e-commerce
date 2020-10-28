import React, { Children } from 'react';
import './NeedHelp.scss';
import CallUs from './../CallUs/CallUs';

export default function NeedHelp(
  {
    icon,
    title,
    children
  }
) {
  return (
    <div className="NeedHelp">
      <CallUs
        icon={icon}
        title={title}
      >
        {children}
      </CallUs>
    </div>
  );
};