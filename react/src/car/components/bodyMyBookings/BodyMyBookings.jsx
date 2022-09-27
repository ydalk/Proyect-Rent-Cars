import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import configEnvironment from "../../../config/config.json";
import { fetchAPI } from '../../../helpers/fetch-api';
import CardMyBookings from '../cardMyBookings/CardMyBookings';
import { Container1, Container2, Img, Section1, Wrap3, Wrapper } from './MyBookingsStyle';
import EmptyBookings from '../emptyBookings/EmptyBookings';
import volver from "../../../assets/images/volver.png";

const BodyMyBookings = ({ id }) => {

  const { get } = fetchAPI();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const dataReservation = await get(configEnvironment.API_PATH_FILTER_BY_USER_ID + '/' + id)
    setData(dataReservation);
  }


  useEffect(() => {
    window.scrollTo(0, 0)
    getData();
  }, [])


  return (
    <>
      <Section1>
        <Wrapper>
        <Container1>
          <h4>Mis reservas</h4>
        </Container1>

        <Container2>
          <Img onClick={() => navigate("/")} src={volver} alt="volver" ></Img>
        </Container2>
        </Wrapper>
        
        <Wrap3>
          {
            data.length > 0 ? data.map((item, index) => <CardMyBookings key={index} item={item} />) : <EmptyBookings />
          }
        </Wrap3>
      </Section1>
    </>
  )
}

export default BodyMyBookings;