
import { useContext, useEffect } from "react";
import { CatContext, CityContext, FeatureContext, ImgContext, ProductContext, CalendarContext, AdminContext } from "../../context/useContextCars";
import GridCards from "../components/card/GridCards";

export const Home = () => {

  const { getDataFeature } = useContext(FeatureContext);
  const { getDataCar } = useContext(ProductContext);
  const { getDataImg } = useContext(ImgContext);
  const { getDataCat } = useContext(CatContext);
  const { getDataCity } = useContext(CityContext);
  const { getDataDate } = useContext(CalendarContext);
  const { getDataUser } = useContext(AdminContext);


  useEffect(() => {
    window.scrollTo(0, 0)
    
    getDataFeature();
    getDataCar();
    getDataImg();
    getDataCat();
    getDataCity();
    getDataDate();
    getDataUser();
  }, [])
  

  return (
    <>        
        <GridCards />
    </>
  )
}
