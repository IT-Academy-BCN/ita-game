import DisplayModeSmall from "../components/DisplayModeSmall";
import DisplayMode from "../components/DisplayMode";
import { FooterMenu, Navbar } from "../components";
import { useEffect, useState, useContext } from "react";
import { ActivitiesContext } from "../store/activitiesContext/ActivitiesContext";
import filterByLastWeek from "../utils/filterByLastWeek";
import userList from "../utils/userList";
import { AuthContext } from "../store/authentication/authContext";

function LeaderBoard() {
  const { activitiesAll } = useContext(ActivitiesContext);
  const [users, SetUsers] = useState();
  const [isLoading, SetIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const currentUser = user.user;

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
      <div className="container pt-12 pb-12 mx-auto flex flex-col">
        <DisplayMode />
        <p className="text-lg font-semibold mt-6 mx-6 text-black">
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
