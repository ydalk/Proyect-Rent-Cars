import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import configEnvironment from "../config/config.json";
import { UserContext } from "../context/useContext";
import jwt_decode from "jwt-decode";


export const usePostUser = (settings, email, password) => {

  const navigate = useNavigate();
  const {login} = useContext(UserContext);
  const [error, setError] = useState('');
  
  const postUser = async (settings) => {
     
    let path = configEnvironment.API_PATH_AUTH;
    let url = configEnvironment.API_URL + path;
    fetch(url, settings)
      .then(respuesta => {
          return respuesta.json()
      })
      .then(data => {        
          if(data.respuesta.token){
              login(email, password );
              localStorage.setItem('jwt', JSON.stringify(data.respuesta.token));

              let tok = localStorage.getItem('jwt');
              let decoded = jwt_decode(tok);
              localStorage.setItem('userData', JSON.stringify(decoded));

              navigate("/sesion", {
                replace: true
              })
                        
          }
      })      
      .catch( error => {
        setError('Por favor vuelva a intentarlo, sus credenciales son inválidas');
        console.log(error);
          })    
  }
  
  return {
    postUser,
    error,
  }
}
