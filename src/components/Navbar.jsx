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
    <div className="flex w-full items-center justify-between rounded-b-xl bg-black p-4 text-center text-white">
      <Link to={"/"}>
        <IconArrow />
      </Link>
      {children}
      {showInfo && <IconInfo />}
    </div>
  );
}

export default Navbar;
