import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Label, Wrapper, Button, Title, MsgError } from './RegLogStyled';
import { usePostUser } from '../../helpers/usePostUser';

export const Login = () => {
  
  
  const {postUser, error} = usePostUser();
  
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formState;

 
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
        [ target.name ]: target.value,
      });
      
    }
      
  const handlerSubmit = (e) =>{
      e.preventDefault();
      getUser();
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

          <Label>Correo Electrónico</Label>
          <Input 
            placeholder=' Correo electronico'
            type='email'
            name='email'
            value={ email }
            onChange={ handleInputChange }
            required

          />
          <Label htmlFor="password">Contraseña</Label>
          <Input 
            id='password'
            placeholder=' ********'
            type='password'
            name='password'
            value={ password }
            onChange={ handleInputChange }
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
