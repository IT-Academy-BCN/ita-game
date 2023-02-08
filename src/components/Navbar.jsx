import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IconArrow, IconInfo } from "./atoms";

function Navbar({ children }) {
  const [showInfo, setShowInfo] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/information') {
      setShowInfo(false);
    }
  }, [location]);

  return (
    <div className="flex w-full items-center justify-between rounded-b-xl bg-black p-3 text-center text-white">
      <NavLink to={"/"}>
        <IconArrow />
      </NavLink>
      <div className="flex flex-grow justify-center">{children}</div>
      {showInfo && (
        <NavLink
          to="/information"
          className={`${
            location.pathname === '/information' ? 'text-primary' : ''
          }`}
        >
          <IconInfo />
        </NavLink>
      )}
    </div>
  );
}

export default Navbar;
