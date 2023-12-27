import React from "react";
import { useState, createContext, useEffect } from "react";
import { getMeFetch } from "../api/getMeFetch";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access");
        await login(token);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const login = async (token) => {
    try {
      const userData = await getMeFetch(token);
      delete userData.password;
      setUser(userData);
    } catch (error) {
      return error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  const spinnerStyles = {
    border: "4px solid rgba(0, 0, 0, 0.1)",
    borderLeft: "4px solid #000",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
    margin: "auto",
  };

  const containerStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const data = {
    user,
    setUser,
    login,
    logout,
  };

  if (loading) {
    return (
      <div style={containerStyles}>
        <h3 className="text-primary">loading...</h3>
        <div style={spinnerStyles}></div>
      </div>
    );
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
