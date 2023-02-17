import axios from "axios";
import { useEffect, useState } from "react";

export default function useUsers(URL_USERS)  {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
          try {
            const response = await axios.get(URL_USERS);
            if (response.status === 200) {
              const { data } = response;
              setUsers(data);
            }
          } catch (error) {
            console.error(error);
          }
        };
        getUsers();
      }, []);
    
      return users
}