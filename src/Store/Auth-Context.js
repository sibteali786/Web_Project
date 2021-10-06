import React, { useCallback, useEffect, useState } from "react";

let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  email: "",
  type: "",
  isLoggedin: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedEmail = localStorage.getItem("email");
  const storedType = localStorage.getItem("type");
  const storedExpirationTime = localStorage.getItem("expirationTime");
  const remainingTime = calculateRemainingTime(storedExpirationTime);
  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("email");
    return null;
  } else {
    return {
      token: storedToken,
      email: storedEmail,
      type: storedType,
      expirationTime: remainingTime,
    };
  }
};
export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  let initialEmail;
  let initialType;
  if (tokenData) {
    initialToken = tokenData.token;
    initialEmail = tokenData.email;
    initialType = tokenData.type;
  }

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);
  const [type, setType] = useState(initialType);
  const isUserLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setEmail(null);
    setType(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("email");
    localStorage.removeItem("type");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);
  const loginHandler = (token, email, type, expirationTime) => {
    setToken(token);
    setEmail(email);
    setType(type);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("type", type);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.expirationTime);
    }
  }, [tokenData, logoutHandler]);
  const contextValue = {
    token: token,
    email: email,
    type: type,
    isLoggedin: isUserLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
