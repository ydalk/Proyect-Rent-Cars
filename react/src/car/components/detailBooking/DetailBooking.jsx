import { Images } from '../images/Images';
import { BoxSection, Container1, WrapInput, H4, H5, Stars, Location, Button, Hr, Container2 } from './DetailBookingStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import 'moment/locale/es';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AdminContext } from '../../../context/useContextCars';
import configEnvironment from "../../../config/config.json";



const DetailBooking = ({ auto, fecha }) => {

  const { users } = useContext(AdminContext);
  const user = JSON.parse(localStorage.getItem('userData'));

  const navigate = useNavigate();
  const startD = moment(fecha[0]).calendar();
  const endD = moment(fecha[1]).calendar();
  moment.locale('es');
  const arrivalHour = "15:00";
  const checkIn = true;
  const checkOut = true;
  const validateName = true;
  const validateLastName = true;
  const validateEmail = true;

  
  let usuarioId = '';

  users && users?.filter(usuario => (usuario?.email === user?.email))
    .map((usuario) => (usuario?.userId !== null
      ?
      usuarioId = usuario?.userId
      :
      usuarioId = 'no se encontro id'
    ))

  function reformatDateString(s) {
    var b = s.split(/\D/);
    return b.reverse().join('-');
  }


  const confirmBooking = () => {
    if (arrivalHour && checkIn && checkOut && validateName && validateLastName && validateEmail) {
      Swal.fire({
        title: "Deseas confirmar la reserva?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#041F2C",
        cancelButtonColor: "#008CBA",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, deseo confirmar la reserva!",
        focusConfirm: false,
      }).then((result) => {
        if (result.isConfirmed) {

          let newBooking = {
            userId: parseInt(usuarioId),
            product: {
              id: auto.id
            },
            dateInit: reformatDateString(startD),
            dateFin: reformatDateString(endD),
            startTime: "10:00:00",
            endTime: "10:00:00"
          }

          const settings = {
            method: 'POST',
            body: JSON.stringify(newBooking),
            headers: {
              'Content-Type': 'application/json',
              'Accept': "application/json",
            }
          }

          let path = configEnvironment.API_PATH_RESERVATION + '/new';
          let url = configEnvironment.API_URL + path;
          fetch(url, settings)
            .then(respuesta => respuesta.json())
            .catch(e => {
              console.log("Error escuchando la promesa.");
            })

          Swal.fire({
            title: "¡Muchas gracias!",
            text: "Su reserva se ha realizado con éxito",
            icon: "success",
            confirmButtonColor: "#041F2C",
            confirmButtonText: "Volver al inicio",
            focusConfirm: false,
          }).then((result) => {
            navigate("/");
          });
        }
      });
    }

  };

  return (
    <BoxSection>
      <H5>DETALLE DE RESERVA</H5>
      <Images id={auto.id} />

      <Container1>
        <h5> {auto?.category?.title}</h5>
        <H5>{auto.name}</H5>
        <div>
          <Stars icon={faStar} />
          <Stars icon={faStar} />
          <Stars icon={faStar} />
          <Stars icon={faStar} />
          <Stars icon={faStar} />
        </div>

      </Container1>

      <Location>
        <FontAwesomeIcon icon={faLocationDot} />
        <p>{auto.location}</p>
      </Location>

      <Container2>
        <Hr />
        <WrapInput>
          <p>Fecha de entrega: </p>
          <p> {startD}</p>
        </WrapInput>
        <Hr />
        <WrapInput>
          <p>Fecha de devolución: </p>
          <p> {endD}</p>
        </WrapInput>
        <Hr />

      </Container2>
      <Button onClick={confirmBooking}>CONFIRMAR RESERVA</Button>

    </BoxSection>
  )
}

export default DetailBooking;
