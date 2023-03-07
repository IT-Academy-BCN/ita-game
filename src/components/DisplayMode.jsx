import cup from "../assets/images/cup.png";
import medal from "../assets/images/medal.png";
import { HashLink } from "react-router-hash-link";
import rightArrow from "../assets/arrow_right.svg";
import { ActivitiesContext } from "../store/activitiesContext/ActivitiesContext";
import { useEffect, useState, useContext } from "react";
import filterByLastWeek from "../utils/filterByLastWeek";
import userList from "../utils/userList";
import Avatar, { genConfig } from 'react-nice-avatar'

export default function DisplayMode() {
  const { activities } = useContext(ActivitiesContext);
  const [user, SetUser] = useState([]);
  const [config, setConfig] = useState();

  useEffect(()=>{
    // TODO: Login endpoint will return avatar in the future. Get avatar from authContext
    setConfig()
  },[user])

  useEffect(() => {
    const filteredActivities = filterByLastWeek(activities);
    const user = userList(filteredActivities);
    SetUser(user);
  }, [activities]);

  return (
    <>
      {user.length > 0 && (
        <div className="card bg-white  flex flex-col p-6 content-around mx-6 mt-6 ">
          <div className="flex flex-row justify-start mb-6">
              <Avatar {...config} className="w-28 h-28"/>
            <div className="flex flex-col pl-6 ">
              <p className="text-black font-bold ">{user[0].name}</p>
              <p>React</p>
              <div className="flex flex-row mt-2">
                <img
                  src={medal}
                  alt="medalla"
                  className=" w-12 h-12 rounded-full mr-4 bg-neutral p-1"
                />
                <div>
                  <p className="text-black font-bold ">Nivel 5</p>
                  <p>{user[0].points} ITAS</p>
                </div>
              </div>
            </div>
          </div>
          <HashLink smooth to="/profile#premios">
            <div className="card-actions justify-end ">
              <button className="btn btn-block btn-base flex flex-row justify-between">
                <div className="border-0 rounded-2xl bg-neutral-400 px-2 py-1">
                  <img src={cup} alt="cup" className="w-6" />
                </div>
                <span>Premios conseguidos</span>
                <img className="w-6" src={rightArrow} alt="search" />
              </button>
            </div>
          </HashLink>
        </div>
      )}
    </>
  );
}
