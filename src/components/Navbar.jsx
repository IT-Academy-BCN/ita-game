import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconArrow, IconInfo, IconHome } from "./atoms";

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
      {children}
      {showInfo && <IconInfo />}
    </div>
  );
}

export default Navbar;
