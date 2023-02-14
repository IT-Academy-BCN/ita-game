import cup from "./assets/images/cup.png";
import medal from "./assets/images/medal.png";
import AvatarTemp from "./AvatarTemp";
import { HashLink } from 'react-router-hash-link';

export default function DisplayMode({ user }) {
  return (
    <div className="card bg-white  flex flex-col p-6 content-around mx-6 mt-6 ">
      <div className="flex flex-row justify-start mb-6">
        <AvatarTemp />
        <div className="flex flex-col pl-6 ">
          <p className="text-black font-bold ">{user.name}</p>
          <p>jQuery</p>
          <div className="flex flex-row ">
            <img
              src={medal}
              alt="medalla"
              className=" w-12 h-12 rounded-full border-2 mr-4"
            />
            <div>
              <p className="text-black font-bold ">Nivel 5</p>
              <p>{user.points} ITAS</p>
            </div>
          </div>
        </div>
      </div>
    <HashLink smooth to="/profile#premios" style={{with: 'max-content'}}>
      <div className="card-actions justify-end pt-6 ">
        <button className="btn btn-block btn-base flex flex-row justify-around">
          <img src={cup} alt="cup" className="w-6" />
          <span>Premios conseguidos</span>
          <img
            className="w-6"
            src="src/components/assets/arrow_right.svg"
            alt="search"
          />
        </button>
      </div>
     </HashLink>
    </div>
  );
}
