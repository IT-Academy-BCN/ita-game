import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { urls } from '../../constants/constants';

export const WikiContext = createContext();

export const WikiContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [stack, setStack] = useState('');
  const [stackData, setStackData] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(urls.categories);
        if (response.status === 200) {
          const { data } = response;
          setData(data);
          setCategories(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
  }, []);

  const getStackData = async (framework) => {
    try {
      const response = await axios.get(urls.stackData);
      if (response.status === 200) {
        const { data } = response;
        // aqui guardar toda data para sobreescribir en post?
        const selectedStack = data.filter((d) => d.stack === framework);
        setStackData(selectedStack);
        setStack(framework);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addResource = (resource) => {
    axios
      .post(`http://localhost:3002/stackData?stack=${stack}`, resource, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
      });

    // try {
    //   const response = await axios.post(urls.stackData);
    //   if (response.status === 200) {
    //     const { data } = response;
    //     const selectedStack = data[framework];
    //     console.log(selectedStack);
    //     setStackData(selectedStack);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }

    // const currentStackData = [stackData];
    // currentUsers.push(user);
    // setUsers(currentUsers);
  };

  return (
    <WikiContext.Provider
      value={{ categories, stackData, getStackData, addResource }}
    >
      {children}
    </WikiContext.Provider>
  );
};

// import axios from 'axios';
// import { createContext, useState, useEffect } from 'react';
// import { urls } from '../../constants/constants';

// export const WikiContext = createContext();

// export const WikiContextProvider = ({ children }) => {
//   const [categories, setCategories] = useState([]);
//   const [stackData, setStackData] = useState([]);

//   useEffect(() => {
//     const getCategories = async () => {
//       try {
//         const response = await axios.get(urls.categories);
//         if (response.status === 200) {
//           const { data } = response;
//           setCategories(data);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getCategories();
//     getStackData();
//   }, []);

//   // Funciones de actualización de arr Users en local
//   // estas funciones no actalizarán con server!!!!!!

//   const getStackData = async (framework) => {
//     try {
//       const response = await axios.get(urls.stackData);
//       if (response.status === 200) {
//         const { data } = response;

//         setStackData(data);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addResource = (resource) => {
//     const currentStackData = [...users];
//     currentUsers.push(user);
//     setUsers(currentUsers);
//   };

//   return (
//     <WikiContext.Provider value={{ categories, stackData }}>
//       {children}
//     </WikiContext.Provider>
//   );
// };
