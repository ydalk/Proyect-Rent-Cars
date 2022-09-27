import React from 'react'
import { useNavigate } from 'react-router-dom'
import {WrapReserv, Button } from './BookingButtonStyle'

export const BookingButton = ({auto}) => {

  const navigate = useNavigate();


  return (
    <WrapReserv>
        <h3>Selecciona la fecha de inicio y final</h3>
        <Button onClick={ () => navigate(`booking`, {replace: true})}>RESERVAR</Button>
    </WrapReserv>
  )
}
