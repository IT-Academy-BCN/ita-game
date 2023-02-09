import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { urls } from '../../constants/constants';

export const WikiContext = createContext();

export const WikiContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [stackData, setStackData] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(urls.categories);
        if (response.status === 200) {
          const { data } = response;
          setCategories(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
    getStackData();
  }, []);

  // Funciones de actualización de arr Users en local
  // estas funciones no actalizarán con server!!!!!!

  const getStackData = async (framework) => {
    try {
      const response = await axios.get(urls.stackData);
      if (response.status === 200) {
        const { data } = response;

        setStackData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addResource = (resource) => {
    const currentStackData = [...users];
    currentUsers.push(user);
    setUsers(currentUsers);
  };

  return (
    <WikiContext.Provider value={{ categories, stackData }}>
      {children}
    </WikiContext.Provider>
  );
};
