import { useParams } from 'react-router-dom';
import BodyBooking from '../../components/bodyBooking/BodyBooking'

export const Booking = () => {

  const {id} = useParams();


  return (
    <>
    <BodyBooking id={id} />
    </>
  )
}

export default Booking;