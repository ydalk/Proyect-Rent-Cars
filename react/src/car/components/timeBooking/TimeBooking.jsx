import React, { useState } from 'react'
import {Wrapper, Div, Img, Div2} from './TimeBookingStyle'
import Check from '../../../assets/images/check.png'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

export const TimeBooking = () => {

    const [value, setValue] = useState();
    // let time = value.$H + ':' + value.$m
    
    // console.log(time);

  return (
    <Wrapper>
        <Div>
            <Img src={Check} alt='check'></Img>
            <p>Tu vehículo va a estar listo para recogerlo entre las 10:00 AM y las 11:00 PM</p>
        </Div>
        <Div2>
          <h5>Indica tu horario estimado de llegada</h5>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <MobileTimePicker
                label="hora"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              </Stack>
          </LocalizationProvider>   
        </Div2>
    </Wrapper>
  )
}
