import { useEffect, useState } from 'react';
import BannerTitle from '../bannerTitle/BannerTitle';
import Calendary from "../calendary/Calendary"
import DetailBooking from '../detailBooking/DetailBooking';
import { FormBooking } from '../../components/formBookimg/FormBooking';
import Policy from "../policy/Policy";
import { Wrap2, Wrap3, Section, Section1, Hr, H4, Div } from './BodyBookingStyle';
import { TimeBooking } from '../timeBooking/TimeBooking';
import configEnvironment from "../../../config/config.json";
import { fetchAPI } from '../../../helpers/fetch-api';
import Moment from 'moment';
import { extendMoment } from 'moment-range';



const BodyBooking = ({ id }) => {
  
  const { get } = fetchAPI();

  const [reservations, setReservations] = useState([]);
  const [excludedDates , setExcludedDates] = useState([]);
  const [autos, setAuto] = useState([]);
  const [fecha, setFecha] = useState([Date("yyyy/mm/dd").toString(), Date("yyyy/mm/dd").toString()]);
  const moment = extendMoment(Moment);

  const addFecha = (fecha) =>{
    setFecha(fecha);
  }
  
  const getData = async () => {
    const reservation = await get(configEnvironment.API_PATH_FILTER_BY_PRODUCT_ID + '/' + id)
    setReservations(reservation);

    let bookedDates = [];

    reservation?.forEach((booking) => {

      let start = moment(booking.startDate,'YYYY-MM-DD').add(1, 'days');
      let end = moment(booking.endDate,'YYYY-MM-DD').add(1, 'days');
      
      const range = moment.range(start, end);
      const dates = Array.from(range.by("day")).map(m => new Date(m.format('YYYY-MM-DD')));

      bookedDates = bookedDates.concat(dates);
    });
    setExcludedDates(bookedDates);
    
  }

  useEffect(() => {
    getData();
  }, [])


  useEffect(() => {
    const getData = async () => {
      const auto = await get(configEnvironment.API_PATH_CARS + '/' + id)
      setAuto(auto);
    }
    getData();

  }, [])


  return (
    <div>
      <BannerTitle autos={autos} />

      <Section1>
        <Wrap2>

          <H4>Completa tus datos</H4>
          <FormBooking />
          <H4>Seleccion tu fecha de reserva</H4>
          <Div>
            <Calendary addValueDetail={addFecha} excludedDates={excludedDates}/>
          </Div>
          <>
            <H4>Tu horario de llegada</H4>
            <TimeBooking />
          </>
        </Wrap2>

        <Wrap3>
          <DetailBooking auto={autos}  fecha={fecha}/>
        </Wrap3>
      </Section1>

      <Section>
        <h4>Generalidades</h4>
        <Hr />
        <Policy />
      </Section>
    </div>

  )
}

export default BodyBooking;