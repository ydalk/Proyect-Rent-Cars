import { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../context/useContext'
import { AdminContext } from '../../context/useContextCars';

export const ProtectedRoutes = ({children}) => {

  
  const {logged} = useContext(UserContext);

  
  return (logged)
  ? children 
  : 
  <Navigate to={"/login"}/>

  
}