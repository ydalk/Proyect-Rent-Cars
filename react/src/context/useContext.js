import React, { createContext, useReducer, useState } from "react";
import { types } from "../types/types";
import { userReducer } from "./userReducer";



export const UserContext = createContext();


const init =()=>{
  const user = JSON.parse( localStorage.getItem('user'));

  return{
    logged: !!user,
    user: user,
  }
}

export const UserProvider = ({ children }) => {
 
    
    const [authState, dispatch] = useReducer( userReducer, {}, init);

    const login = (email = '', password = '')=>{

      const action = {
        type: types.login,
        payload: {
          email:email,
          password: password,
        }
      } 

      //localStorage.setItem('user', JSON.stringify(email));

      dispatch(action);  
    }

    const logout = () =>{

      localStorage.removeItem('userData');
      localStorage.removeItem('jwt');
      const action = {type: types.logout}
      dispatch(action);
    }

  return (

    <UserContext.Provider  value= {{ ...authState, login:login, logout:logout}}>
        {children}
    </UserContext.Provider>
  )

}