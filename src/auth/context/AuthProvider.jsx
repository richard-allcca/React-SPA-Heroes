import { useMemo, useReducer } from "react";
import { types } from "../types/types";

import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

//NOTE - esto es innecesario si usas init con localStorage, mejor usa {} ln/12
const initialState = {
  logged: false,
};

function init() {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user,
  };
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  function login(name = "") {
    const user = { id: "ABC", name };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  }

  function logout() {
    localStorage.removeItem("user");

    const action = {
      type: types.logout,
    };

    dispatch(action);
  }

  // const data = useMemo(() => (//FIXME - it remains to be tested
  //   {
  //     ...authState,

  //     login,
  //     logout,
  //   }
  // ), [...authState, login, logout]);

  const data = {
    ...authState,

    login,
    logout,
  };

  return <AuthContext.Provider value={ data }>{ children }</AuthContext.Provider>;
};





