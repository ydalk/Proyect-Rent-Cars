import { useParams } from 'react-router-dom';
import BodyDetail from "../../components/bodyDetail/BodyDetail";


const Detail = () => {

  
  const {id} = useParams();
  

  return (
    <>
      <BodyDetail id={(Number)(id)}/>    

    </>
    
  )
}

export default Detail;