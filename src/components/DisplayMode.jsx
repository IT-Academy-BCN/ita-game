import cup from "../assets/images/cup.png";
import medal from "../assets/images/medal.png";
import { HashLink } from "react-router-hash-link";
import rightArrow from "../assets/arrow_right.svg";
import { useContext } from "react";
import { ActivitiesContext } from "../store/activitiesContext/ActivitiesContext";
import { useEffect } from "react";
import { useState } from "react";
import { DateTime } from "luxon";
import Avatar from "./Avatar/Avatar";

export default function DisplayMode() {
  const { activities } = useContext(ActivitiesContext);
  const [users, SetUsers] = useState();

  useEffect(() => {
    const weekTimestamp = Math.floor(Date.now() / 1000);
    const weekDate = DateTime.fromMillis(weekTimestamp * 1000);
    const startOfWeek = weekDate.startOf("week");
    let users = [];
    activities
      .filter((item) => {
        const itemDate = DateTime.fromMillis(Date.parse(item.doneDate));
        return (
          itemDate >= startOfWeek && itemDate < startOfWeek.plus({ weeks: 1 })
        );
      })
      .forEach((user) => {
        const found = users.findIndex((e) => e.id === user.doneBy._id);
        if (found === -1) {
          users.push({
            id: user.doneBy._id,
            name: user.doneBy.name,
            points: user.typeId.points,
          });
        } else {
          users[found].points += user.typeId.points;
        }
        SetUsers(users);
      });
  }, [activities]);
  return (
    <>
      {users && (
        <div className="card bg-white  flex flex-col p-6 content-around mx-6 mt-6 ">
          <div className="flex flex-row justify-start mb-6">
            <Avatar />
            <div className="flex flex-col pl-6 ">
              <p className="text-black font-bold ">{users[0].name}</p>
              <p>jQuery</p>
              <div className="flex flex-row mt-2">
                <img
                  src={medal}
                  alt="medalla"
                  className=" w-12 h-12 rounded-full mr-4 bg-neutral p-1"
                />
                <div>
                  <p className="text-black font-bold ">Nivel 5</p>
                  <p>{users[0].points} ITAS</p>
                </div>
              </div>
            </div>
          </div>
          <HashLink smooth to="/profile#premios">
            <div className="card-actions justify-end ">
              <button className="btn btn-block btn-base flex flex-row justify-around">
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
