import React from 'react';
import { Indicator } from '../atoms';

const IndicatorGroup = ({ title, punctuation, children, points }) => {
  return (
    <div className="flex flex-col items-center m-3">
      <Indicator punctuation={punctuation} points={points}>
        {children}
      </Indicator>
      {/* ==> estos valores tendrían que venir el user */}
      <p className="text-sm mt-2 w-20 text-center">{title}</p>
      <p className="text-secondary text-center mt-2">{punctuation}</p>
    </div>
  );
};

export default IndicatorGroup;
