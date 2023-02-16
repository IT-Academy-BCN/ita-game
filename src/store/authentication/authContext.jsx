import axios from 'axios';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.post(
        'https://itacademy.onrender.com/auth/signin',
        credentials
      );
      if (res.status === 200) {
        setUser(res.data);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
      console.error(error);
    }
  };

  const register = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.post(
        'https://itacademy.onrender.com/api/users',
        credentials
      );
      if (res.status === 200) {
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};
