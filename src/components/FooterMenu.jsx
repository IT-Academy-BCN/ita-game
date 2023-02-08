import React from "react";
import { IconsGroup } from "./molecules";

const FooterMenu = () => {
  return (
    <div className="fixed z-index:1 bottom-5 left-[4%] bg-black text-secondary h-fit w-[90%] px-5 py-3 rounded-xl">
      <IconsGroup />
    </div>
  );
};

export default FooterMenu;
