import { createContext, useState } from "react";
import {fetchAPI} from "../helpers/fetch-api";
import configEnvironment from "../config/config.json";

export const ProductContext = createContext();
export const ImgContext = createContext();
export const FeatureContext = createContext();
export const CatContext = createContext();
export const CalendarContext = createContext();
export const AdminContext = createContext();


export const CityContext = createContext();


export const ProductProvider = ({ children }) => {
  const { get } = fetchAPI()
  
  const [ cars, setCars] = useState();

  
  const getDataCar = async () => {
      const autos = await get(configEnvironment.API_PATH_CARS)
      setCars(autos);
    }  
  
  return (

    <ProductContext.Provider  value= {{cars, setCars, getDataCar}}>
        {children}
    </ProductContext.Provider>
  )
  
};


export const ImgProvider = ({ children }) => {
  const { get } = fetchAPI()
  
  const [ images, setImages] = useState();
  
  const getDataImg = async () => {
    const imagenes = await get(configEnvironment.API_PATH_IMAGES)
    setImages(imagenes);
  }  
  
  return (

    <ImgContext.Provider  value= {{images, setImages, getDataImg}}>
        {children}
    </ImgContext.Provider>
  )
  
};

export const FeatureProvider = ({ children }) => {
  const { get } = fetchAPI()
  
  const [features, setFeatures] = useState();

  const getDataFeature = async () => {
    const datos = await get(configEnvironment.API_PATH_PROD_FEAT)
    setFeatures(datos);
  }  
      
  return (

    <FeatureContext.Provider  value= {{features, setFeatures, getDataFeature}}>
        {children}
    </FeatureContext.Provider>
  )

}

export const CatProvider = ({ children }) => {
  const { get } = fetchAPI()
  
  const [cat, setCat] = useState();
  
  const getDataCat = async () => {
    const categorias = await get(configEnvironment.API_PATH_CATEGORIAS_AUTOS)
    setCat(categorias);
  }  
    
  return (

    <CatContext.Provider value= {{cat, setCat, getDataCat}}>
        {children}
    </CatContext.Provider>
  )

}

export const CalendarProvider = ({ children }) => {
  const { get } = fetchAPI()
  
  const [ reservations, setReservations] = useState();
  
  const getDataDate = async () => {
      const reservas = await get(configEnvironment.API_PATH_RESERVATION)
      setReservations(reservas);
  }  
  
  return (

    <CalendarContext.Provider  value= {{reservations, setReservations, getDataDate}}>
        {children}
    </CalendarContext.Provider>
  )
  
};

export const CityProvider = ({ children }) => {
  const { get } = fetchAPI()
  
  const [cities, setCities] = useState();
  
  const getDataCity = async () => {
    const ciudad = await get(configEnvironment.API_PATH_CITIES)
    setCities(ciudad);
  }  
    
  return (

    <CityContext.Provider value= {{cities, setCities, getDataCity}}>
        {children}
    </CityContext.Provider>
  )

};

export const AdminProvider = ({ children }) => {
  const { get } = fetchAPI()
  
  const [ users, setUsers] = useState();
  
  const getDataUser = async () => {
    const usuarios = await get(configEnvironment.API_PATH_USERS)
    setUsers(usuarios);
  } 
    
  return (

    <AdminContext.Provider value= {{users, setUsers, getDataUser}}>
        {children}
    </AdminContext.Provider>
  )

}