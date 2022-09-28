import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Label, Wrapper, Button, Title, MsgError, Must } from './RegLogStyled';
import { usePostUser } from '../../helpers/usePostUser';
import { useForm } from '../../hooks/useForm';

export const Login = () => {
  
  
  const {postUser, error} = usePostUser();
  
  const {formState, onInputChange, onResetForm, email, password} = useForm({
    email: '',
    password: '',
  });

     
  const handlerSubmit = (e) =>{
      e.preventDefault();
      getUser();
      onResetForm();
  }


  const getUser = () => {
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
      }
    } 
    postUser(settings, email, password);
  }

  
  return (
    <Wrapper>


      <Title>Ingresar</Title>

      <Form onSubmit={handlerSubmit}>

          <Label>Correo Electrónico <Must>*</Must></Label>
          <Input 
            placeholder=' Correo electronico'
            type='email'
            name='email'
            value={ email }
            onChange={ onInputChange }
            required

          />
          <Label htmlFor="password">Contraseña <Must>*</Must></Label>
          <Input 
            id='password'
            placeholder=' ********'
            type='password'
            name='password'
            value={ password }
            onChange={ onInputChange }
            required
          />
          <Button id="ingresar" type='submit'>Ingresar</Button>
          <p> ¿No tienes una cuenta?  <Link to='/register'> Registrate aquí </Link> </p>
          <>
            <MsgError>{error}</MsgError>  
          </>   
      </Form>
    </Wrapper>
  )
}
