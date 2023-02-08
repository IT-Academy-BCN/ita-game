import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconArrow, IconInfo } from "./atoms";
import { NavLink } from "react-router-dom";

function Navbar({ children }) {
  const [showInfo, setShowInfo] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/information") {
      setShowInfo(false);
    }
  }, [location]);

  return (
    <div className="flex w-full justify-between items-center text-center bg-black text-white p-4 rounded-b-xl">
      <Link to={"/"}>
        <IconArrow />
      </Link>
      <div className="flex flex-grow justify-center">{children}</div>
      {showInfo && (
        <NavLink
          to="/information"
          className={`${
            location.pathname === "/information" ? "text-primary" : ""
          }`}
        >
          <IconInfo />
        </NavLink>
      )}
    </div>
  );
}

export default Navbar;
