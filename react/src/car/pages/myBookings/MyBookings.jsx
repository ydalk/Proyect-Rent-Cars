import { useParams } from 'react-router-dom';
import BodyMyBookings from '../../components/bodyMyBookings/BodyMyBookings';

const MyBookings = () => {

  const {id} = useParams();

  return (
    <BodyMyBookings id={id} />
  )
}

export default MyBookings;