import DisplayModeSmall from "../components/DisplayModeSmall";
import DisplayMode from "../components/DisplayMode";
import { FooterMenu, Navbar } from "../components";
import { useEffect, useState, useContext } from "react";
import { ActivitiesContext } from "../store/activitiesContext/ActivitiesContext";
import filterByLastWeek from "../utils/filterByLastWeek";
import userList from "../utils/userList";

const currentUser = {
  id: "63e9d29bb04cb600417abcb6",
  name: "Ona Costa",
  points: 80,
};
const url = "https://itacademy.onrender.com/api/activity/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U5ZDA1OGIwNGNiNjAwNDE3YWJjYWUiLCJpYXQiOjE2NzYyNjc3MjZ9.4NFtPYgOQnQbWeAQ3Ow0qhyeMszw8cqC5TlOBRlaynM";
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

function LeaderBoard() {
  const { activitiesAll } = useContext(ActivitiesContext);
  const [users, SetUsers] = useState();
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(() => {
    SetIsLoading(true);
    const filteredActivities = filterByLastWeek(activitiesAll);
    const users = userList(filteredActivities);
    SetUsers(users);
    SetIsLoading(false);
  }, [activitiesAll]);

  return (
    <>
      <Navbar>Competición</Navbar>
      <div className="container pt-10 mx-auto flex flex-col">
        <DisplayMode />
        <p className="text-lg font-semibold m-6 text-black">
          Clasificación semanal
        </p>
        {isLoading && <p className="text-center">Loading...</p>}
        {users &&
          users
            // ordenamos por puntuacion
            .sort((a, b) => (a.points > b.points ? -1 : 0))
            .map((user, index) => (
              <DisplayModeSmall
                key={user.name}
                user={user}
                position={index + 1}
                currentUser={currentUser}
                level={5}
              />
            ))}
      </div>
      <FooterMenu />
    </>
  );
}

export default LeaderBoard;
