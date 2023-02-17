import Avatar, { genConfig } from 'react-nice-avatar'
import { useEffect, useState } from "react";

export default function AvatarTemp({ children }) {
  const [config, setConfig] = useState();

  useEffect(()=>{
    // TODO: Login endpoint will return avatar in the future. Get avatar from authContext
    setConfig(genConfig())
  },[])

  return (
    <div className="avatar placeholder indicator">
      {children}
      <div className="w-14 h-14 rounded-full bg-neutral text-neutral-content">
        {/* <span className=" text-black">hola</span> */}
        <Avatar {...config} className="w-14 h-14" />
      </div>
    </div>
  );
}
