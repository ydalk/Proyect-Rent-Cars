import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import configEnvironment from "../../config/config.json";
import { usePostUser } from '../../helpers/usePostUser';
import { useForm } from '../../hooks/useForm';
import { Form, Input, Label, Wrapper, Button, Title, MsgError, Must } from './RegLogStyled';

export const Register = () => {
  
  
  const {postUser} = usePostUser();
  const [err, setErr] = useState('');
  const [passConf, setPassConf] = useState('');
  const {confirmPass} = passConf; 
  

  const {formState, onInputChange, name, lastName, cityUser, email, password} = useForm({
    name : '', 
    lastName : '',
    cityUser : '',
    email : '',
    password : '',
  });

  const handledPassword = ({ target })=>{

    setPassConf({
      [ target.name ]: target.value,
    });
  }
  
 
  const validatePass = (e)=>{
    e.preventDefault();

    if(password.length <= 6 && password.length > 1 ){
      setErr(<MsgError>la contraseña debe tener mínimo 6 caracteres</MsgError>)
    }else if (formState.password !== confirmPass){
      setErr(<MsgError>las contraseñas no coinciden, intentelo nuevamente</MsgError>)
    } else{

      getData();
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
          Accept: "application/json",
      }
    } 
    postData(settings);
  }

  const postData = async (settings) => {
    let path = configEnvironment.API_PATH_USERS + '/new';
    let url = configEnvironment.API_URL + path;
    fetch(url, settings)
      .then(respuesta => respuesta.json())
      .then( data => {
        setTimeout(function(){
        Swal.fire({
          title: "¡Bienvenido!",
          text: "Su registro se ha realizado con éxito",
          icon: "success",
        }).then((result) => {          
            postUser(settings, email, password);          
        });
      }, 1000);        
       
      })
        .catch( e => {
          console.log("Error escuchando la promesa.");
        })        
  } 

  
  useEffect(() => { 
  }, [])


  return (
    <Wrapper>

      <Title>Registro</Title>

      <Form onSubmit={validatePass}>

          <Label>Nombre <Must>*</Must></Label>
          <Input 
            placeholder=' Nombre' 
            type='text'
            name='name'
            value={ name }
            onChange={ onInputChange }
            required
          />
          <Label>Apellido <Must>*</Must></Label>
          <Input 
            placeholder=' Apellido'
            type='text'
            name='lastName'
            value={ lastName }
            onChange={ onInputChange }
            required
          />
          <Label>Ciudad <Must>*</Must></Label>
          <Input 
            placeholder=' Ciudad'
            type='text'
            name='cityUser'
            value={ cityUser }
            onChange={ onInputChange }
            required
          />
          <Label>Correo Electrónico <Must>*</Must></Label>
          <Input 
            placeholder=' Correo electronico'
            type='email'
            name='email'
            value={ email }
            onChange={ onInputChange }
            required
          />
          <Label>Contraseña <Must>*</Must></Label>
          <Input 
            placeholder=' Contraseña'
            type='password'
            name='password'
            value={ password }
            onChange={ onInputChange }
            required
          />
          <Label>Confirmar Contraseña <Must>*</Must> </Label>
          <Input 
            placeholder=' Confirmar Contraseña'
            type='password'
            name='confirmPass'
            value={ confirmPass }
            onChange={ handledPassword }
            required
          />
          <Button id="btnCrearCuenta2" type="submit">Crear Cuenta</Button>
          <p> ¿Ya tienes una cuenta?  <Link to='/login'>  Ingresa aquí </Link> </p>
          {err}
      </Form>
    </Wrapper>
  )
};
