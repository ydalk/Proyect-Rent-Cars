import { useNavigate } from "react-router-dom";
import "./emptyStyle.css";

const EmptyBookings = () => {

  const navigate = useNavigate();
  return (
    <div className='wrap-body' >

      <div className="top">
        <h1 className="titulo">Ooops!</h1>
        <h3 className="subtitulo">Aún no tienes reservas</h3>
      </div>

      <div className="container">
        <div className="ghost-copy">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>

        <div className="ghost">
          <div className="face">
            <div className="eye"></div>
            <div className="eye-right"></div>
            <div className="mouth"></div>
          </div>
        </div>

        <div className="shadow"></div>
      </div>

      <div className="bottom">
        <p className="texto" >Tenemos las mejores recomendaciones para ti!</p>
        <div className="buttons">
          <button className="btn" onClick={() => navigate("/")}>volver al home</button>
        </div>
      </div>

    </div>
  )
}

export default EmptyBookings;