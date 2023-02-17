import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "../authentication/authContext";

export const ActivitiesContext = createContext();

const currentUser = {
  id: "63e9d29bb04cb600417abcb6",
  name: "Ona Costa",
  points: 80,

};
const url = "https://itacademy.onrender.com/api/activity/";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U5ZDA1OGIwNGNiNjAwNDE3YWJjYWUiLCJpYXQiOjE2NzYyNjc3MjZ9.4NFtPYgOQnQbWeAQ3Ow0qhyeMszw8cqC5TlOBRlaynM";

// const options = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },

// };

export const ActivitiesContextProvider = ({ children }) => {


  const { user } = useContext(AuthContext)
  console.log("user", user.token)

  const [activities, setActivities] = useState([]);
  const [activitiesAll, setActivitiesAll] = useState([]);

  const getActivitiesOfAUser = async () => {
    let dataAll = [];
    try {
      const response = await axios.get(url, 
        { headers: {
          Authorization: `Bearer ${user.token}`,
        }});
      if (response.status === 200) {
        const { data } = response;
        dataAll = data;
        setActivitiesAll(dataAll);
      }
    } catch (error) {
      console.log(error);
    }
    if(user){
    let dataUser = dataAll.filter(
      (el) => el.doneBy._id == user.user._id  
    );
    setActivities(dataUser);}
  };

  useEffect(() => {
    getActivitiesOfAUser();
  }, []);

  return (
    <ActivitiesContext.Provider value={{ activities, activitiesAll, getActivitiesOfAUser }}>
      {children}
    </ActivitiesContext.Provider>
  );
};
