import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { urls } from '../../constants/constants';

export const WikiContext = createContext();

export const WikiContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [stack, setStack] = useState('');
  const [stackData, setStackData] = useState([]);
  const [originalStackData, setOriginalStackData] = useState([...stackData]);

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
  }, []);

  const getStackData = async (framework) => {
    localStorage.removeItem('currentFramework');
    localStorage.setItem('currentFramework', JSON.stringify({ framework }));
    try {
      const response = await axios.get(urls.stackData);
      if (response.status === 200) {
        const { data } = response;

        const selectedStack = data.filter((d) => d.stack === framework);
        setOriginalStackData(selectedStack);
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
  };

  const filterResourceByMediaType = (type) => {
    const filteredResource = originalStackData.filter(
      (d) => d.type[type] === true
    );
    setStackData(filteredResource);
  };

  const filterResourceByTopic = (topic) => {
    const filteredResource = originalStackData.filter((d) => d.topic === topic);
    setStackData(filteredResource);
  };

  const sortByDate = () => {
    let copyOriginal = [...stackData];
    copyOriginal.sort((a, b) => {
      return new Date(b.createdOn) - new Date(a.createdOn);
    });

    setStackData(copyOriginal);
  };
  const sortByLikes = () => {
    let copyOriginal = [...stackData];
    copyOriginal.sort((a, b) => {
      return b.likes - a.likes;
    });

    setStackData(copyOriginal);
  };

  return (
    <WikiContext.Provider
      value={{
        categories,
        stackData,
        stack,
        originalStackData,
        getStackData,
        addResource,
        setStack,
        filterResourceByMediaType,
        filterResourceByTopic,
        sortByDate,
        sortByLikes,
      }}
    >
      {children}
    </WikiContext.Provider>
  );
};
