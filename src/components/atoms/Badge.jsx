import React from 'react';

const Badge = ({ children, classBody, classFigure, classTitle, img, text }) => {
   return (
      <div className="card w-36 bg-base-100">
         <figure className={classFigure}>
            <img src={img} alt={children} className="rounded-xl" />
         </figure>
         <div className={classBody}>
            <h6 className={classTitle}>{children}</h6>
            <p className="text-xs text-gray-400">{text}</p>
         </div>
      </div>
   );
};

export default Badge;
