import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import configEnvironment from "../../../../config/config.json";
import { AdminContext } from '../../../../context/useContextCars';
import { Form, Input, Label, Wrapper, Button, Title, MsgError, Close } from './FormUserStyle';

export const FormUser = ({confirmData}) => {

    const data = false;
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const { getDataUser } = useContext(AdminContext);
    const [formState, setFormState] = useState({});
    
    const { name, lastName, cityUser, email, password} = formState;
    
  
    const handleInputChange = ({ target }) => {
      setFormState({
        ...formState,
          [ target.name ]: target.value,
        });
    }
    
    const validatePass = (e)=>{
      e.preventDefault();
  
      if(password.length <= 6 && password.length > 1 ){
        setErr(<MsgError>la contraseña debe tener mínimo 6 caracteres</MsgError>)
      }else {
        guardar();
      }     
    }
  
    
    const getData = () => {
      const newUser = {
        ...formState,
        "role": {
          "id":1,
          "name" :"user"
        }
      }
      const settings = {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json',
            'Accept': "application/json",
        }
      } 
      postData(settings);
      getDataUser();
    }
  
    const postData = async (settings) => {
      let path = configEnvironment.API_PATH_USERS + '/new';
      let url = configEnvironment.API_URL + path;
      fetch(url, settings)
        .then(respuesta => respuesta.json())
        .catch( e => {
          console.log("Error escuchando la promesa.");
        })        
    } 

    const guardar = () => {            
      Swal.fire({
        title: "Deseas confirmar el nuevo registro?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#041F2C",
        cancelButtonColor: "#008CBA",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, deseo confirmar el registro!",
        focusConfirm: false,
      }).then((result) => {
        if (result.isConfirmed) {
          getData();
          Swal.fire({
            title: "¡Muchas gracias!",
            text: "El registro se ha guardado con éxito",
            icon: "success",
            confirmButtonColor: "#041F2C",
            confirmButtonText: "Cerrar",
            focusConfirm: false,
          }).then((result) => {
            confirmData(data);
            navigate("/admin");
          });
        }else if(!result.isConfirmed){
          confirmData(data)
        }
      });
  };
  
    return (
      <Wrapper>
        <Close onClick={()=>{confirmData(data)}}> X </Close>
        <Title>Registrar Datos</Title>
  
        <Form onSubmit={validatePass} >
  
            <Label>Nombre</Label>
            <Input 
              placeholder=' Nombre' 
              type='text'
              name='name'
              value={ name }
              onChange={ handleInputChange }
              required
            />
            <Label>Apellido</Label>
            <Input 
              placeholder=' Apellido'
              type='text'
              name='lastName'
              value={ lastName }
              onChange={ handleInputChange }
              required
            />
            <Label>Ciudad</Label>
            <Input 
              placeholder=' Ciudad'
              type='text'
              name='cityUser'
              value={ cityUser }
              onChange={ handleInputChange }
              required
            />
            <Label>Correo Electrónico</Label>
            <Input 
              placeholder=' Correo electronico'
              type='email'
              name='email'
              value={ email }
              onChange={ handleInputChange }
              required
            />
            <Label>Contraseña</Label>
            <Input 
              placeholder=' Contraseña'
              type='password'
              name='password'
              value={ password }
              onChange={ handleInputChange }
              required
            />
            <Button id="Add" type="submit">Guardar</Button>
            {err}
        </Form>
      </Wrapper>
    )
}
