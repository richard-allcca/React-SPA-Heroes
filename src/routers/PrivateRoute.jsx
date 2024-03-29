import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  const { pathname, search } = useLocation(); //puedes usar memo para evitar rerender

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);

  return logged
    ? children // to heroes
    : <Navigate to="/login" />;
};
