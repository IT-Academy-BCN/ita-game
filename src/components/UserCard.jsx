import React, { useContext } from 'react';
import { AuthContext } from '../store/authentication/AuthContextProvider';
import { AvatarTemp } from './index';
import { NavHashLink } from 'react-router-hash-link';
import rightArrow from '../assets/arrow_right.svg';

const UserCard = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavHashLink
      smooth
      to="/historical#puntos-ganados"
      className="card flex flex-row justify-between items-center p-4 my-2 mx-6 bg-white w-[90%]"
    >
      <div className="flex flex-row">
        <AvatarTemp>
          <span className="flex font-semibold z-[100] items-center justify-center border-white w-[25px] h-[25px] border-2 absolute right-0 bottom-[35px] left-10 rounded-full text-center text-[10px] bg-primary text-black">
            {user.ITApoints}
          </span>
        </AvatarTemp>
        <div className="flex flex-col justify-center ml-6">
          <h2 className="font-bold text-black">
            {user.name} {user.surname}
          </h2>
          <p className="text-secondary font-bold text-xs">Semana 34</p>
        </div>
      </div>
      <div className="flex flex-row ">
        <p>
          <span className="font-bold text-sm text-black">+55 ITAS</span>
        </p>
        <img className="w-5 ml-3" src={rightArrow} alt="search" />
      </div>
    </NavHashLink>
  );
};

export default UserCard;
