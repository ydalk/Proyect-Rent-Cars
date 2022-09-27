import React, { useState } from 'react'
import { Form, Input,  Label, Div,  Wrapper} from './FormBookingStyle';

export const FormBooking = () => {
    
    const user = JSON.parse(localStorage.getItem('userData'));

    const [formState, setFormState] = useState({
        nombre: '',
        apellido: '',
        email: '',
        ciudad: '',
      });

    const { ciudad } = formState;

    const handleInputChange = ({ target }) => {
    setFormState({
        ...formState,
        [ target.name ]: target.value,
        });

    }

    const handlerSubmit = (e) =>{
        e.prevetDefault();
      }

  return (
    <>
       
        <Wrapper>
            <Form onSubmit={handlerSubmit}>
            <Div>
                <Label>Nombre</Label>
                <Input
                    placeholder='nombre'
                    type='text'
                    name='nombre'
                    value={ user?.name }
                    onChange={ handleInputChange }
                    required
                    disabled
                />
            </Div>
            <Div>
                <Label>Apellido</Label>
                <Input
                    placeholder='apellido'
                    type='text'
                    name='apellido'
                    value={ user?.lastName }
                    onChange={ handleInputChange }
                    required
                    disabled
                />
            </Div>
            <Div>
                <Label>Coreo electrónico</Label>
                <Input
                    placeholder='Correo electronico'
                    type='email'
                    name='email'
                    value={ user?.email }
                    onChange={ handleInputChange }
                    required
                    disabled
                />
            </Div>
            <Div>
                <Label>Ciudad</Label>
                <Input
                    type='text'
                    name='ciudad'
                    value={ ciudad }
                    onChange={ handleInputChange }
                    required
                />
            </Div>
            </Form>
        </Wrapper>
    </>
  )
}
