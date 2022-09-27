import { useContext, useEffect, useState } from "react";
import {
  Hr,
  Section,
  ContainerCalen,
} from "./BodyStyle";
import configEnvironment from "../../../config/config.json";
import { fetchAPI } from "../../../helpers/fetch-api";
import { ImgContext } from "../../../context/useContextCars";
import { Feature } from "../feature/Feature";
import { Carrusel } from "../carrusel/Carrusel";
import Calendary from "../calendary/Calendary"
import { BookingButton } from "../bookingButton/BookingButton";
import BannerTitle from "../bannerTitle/BannerTitle";
import Policy from "../policy/Policy";

const BodyDetail = ({ id }) => {


  const { get } = fetchAPI();
  const { getDataImg } = useContext(ImgContext);
  const [autos, setAuto] = useState([]);

  
  useEffect(() => {
    
    window.scrollTo(0, 0)

    const getData = async () => {
      const auto = await get(configEnvironment.API_PATH_CARS + '/' + id)
      setAuto(auto);
    }
    getData();
    getDataImg();
  }, [])


  return (
    <>
      <BannerTitle autos={autos} />
      <Carrusel id={id} />

      <Section>
        <h4>{autos.name}</h4>
        <Hr />
        <p>{autos.description}</p>
      </Section>

      <Section>
        <Feature key={id} id={id} />
      </Section>

      <Section>
        <h4>Fechas disponibles</h4>
        <Hr />
        <ContainerCalen>
          <Calendary />
          <BookingButton auto={autos} />
        </ContainerCalen>
      </Section>

      <Section>
        <h4>Generalidades</h4>
        <Hr />
        <Policy />
      </Section>

    </>
  );
};

export default BodyDetail;
