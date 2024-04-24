import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  loginRequest,
  registerRequest,
  verifyTokenRequest,
} from '../api/auth';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error(
      'useAuth must be used within an AuthProvider',
    );

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] =
    useState(false);
  const [errors, setErrors] = useState([]);
  const [isOwner, setIsOwner] = useState(false);

  const signUp = async (user) => {
    try {
      const newUser = {
        name: user.name,
        lastName: user.lastName,
        age: parseInt(user.age),
        email: user.email,
        phoneNumber: user.phoneNumber,
        userName: user.userName,
        password: user.password,
      };

      const res = await registerRequest(newUser);

      console.log(res.data);

      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);

      setIsAuthenticated(true);
      setUser(res.data);

      if (res.data.rol === 'owner') {
        setIsOwner(true);
      } else {
        setIsOwner(false);
      }
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const logOut = () => {
    Cookies.remove('auth-token');
    setIsAuthenticated(false);
    setUser(null);
    setIsOwner(false);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function verifyLogin() {
      const cookies = Cookies.get();

      if (cookies['auth-token']) {
        try {
          const res = await verifyTokenRequest(
            cookies['auth-token'],
          );

          console.log(res);

          if (!res.data) {
            setIsAuthenticated(false);
            return;
          }

          setIsAuthenticated(true);
          setUser(res.data);

          if (res.data.rol === 'owner') {
            setIsOwner(true);
          } else {
            setIsOwner(false);
          }
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
          setIsOwner(false);
        }
      }
    }
    verifyLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        logOut,
        isAuthenticated,
        user,
        isOwner,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
