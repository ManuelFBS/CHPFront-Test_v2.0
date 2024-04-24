import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  getAllUsers,
  verifyTokenRequest,
} from '../api/users';

export const UsersContext = createContext();

export const useUsers = () => {
  const context = useContext(UsersContext);

  if (!context)
    throw new Error(
      'useUsers must be used within an UsersProvider',
    );

  return context;
};

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);

  const getUsers = async () => {
    try {
      const res = await getAllUsers();
      // console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UsersContext.Provider
      value={{ users, errors, getUsers }}
    >
      {children}
    </UsersContext.Provider>
  );
};
