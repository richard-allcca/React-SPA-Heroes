import { useReducer } from "react"
import { types } from "../types/types";

import { AuthContext } from "./AuthContext"
import { authReducer } from './authReducer';

//NOTE - esto es innecesario si usas init con localStorage, en su lugar solo usa {}
const initialState = {
   logged: false,
}

const init = () => {
   const user = JSON.parse(localStorage.getItem('user'))

   return {
      logged: !!user,
      user
   }
}

export const AuthProvider = ({ children }) => {

   const [ authState, dispatch ] = useReducer(authReducer, initialState, init)

   const login = (name = '') => {

      const user = { id: "ABC", name };

      const action = {
         type: types.login,
         payload: user
      }

      localStorage.setItem("user", JSON.stringify(user))

      dispatch(action);
   }

   const logout = () => {

      localStorage.removeItem("user");

      const action = {
         type: types.logout,
      }

      dispatch(action);
   }

   const data = {
      ...authState,

      login,
      logout
   }

   return (
      <AuthContext.Provider value={ data }>
         { children }
      </AuthContext.Provider>
   )
}