import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import Creatable from 'react-select/creatable';
import {Div,Button,Containerinput, H1, customStyles, Containershade}  from './SearchStyle';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Search.css'
import configEnvironment from "../../../config/config.json";
import {fetchAPI} from "../../../helpers/fetch-api";



export function Search( {HandleCityFilter}) {
  const { get } = fetchAPI()
  
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [cities,setCities] = useState([]);
  const [filter,setFilter] = useState([]);
  const {pathname} = useLocation();

  let visibility = 'flex'

  if(pathname === '/login' || pathname === '/register' ||pathname === '/detail' ){
    visibility = 'none'
  }


  const getData = async () => {
    const cities = await get(configEnvironment.API_PATH_CITIES)

    const mapCities = cities.map((city) => {
      return {value: city.id, label: city.name}
    });

    setCities(mapCities);
  }

  useEffect(() => {
    getData();

    return() =>{
      getData();
  }
  }, []);

  
  return (
    <Div visibility = {visibility}>
      <H1>Elije el vehiculo perfecto para tu siguiente destino</H1>
      <Containershade>
        <Containerinput>
          <Creatable 
              className='cities'
              options={cities}
              styles={ customStyles}
              onChange={city => {setFilter(city);}}
              />
          <DatePicker 
              className='datepicker'
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              isClearable={true}
            />
          <Button id="buscar"  onClick={() => HandleCityFilter(filter.value)}>Buscar</Button>
        </Containerinput>
      </Containershade>
    </Div>
  )
}













