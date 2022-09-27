import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoutes } from "./protectedRoutes/ProtectedRoutes"
import { Home } from "../car/pages/Home"
import { Login } from "../auth/pages/Login"
import { Register } from "../auth/pages/Register"
import { Header } from "../car/components/header/Header"
import { Footer } from "../car/components/footer/Footer"
import { UserProvider } from "../context/useContext"
import Booking from "../car/pages/booking/Booking"
import { ProductProvider, CatProvider, FeatureProvider, ImgProvider, CityProvider, CalendarProvider, AdminProvider } from "../context/useContextCars"
import Detail from "../car/pages/detail/Detail"
import { Admin } from "../admin/pagesAdmin/Admin"
import MyBookings from "../car/pages/myBookings/MyBookings"


export const AppRouter = () => {
 

  return (
    <UserProvider>
    <AdminProvider>
      <ProductProvider>
      <ImgProvider>
      <CatProvider>
      <CalendarProvider>
      <FeatureProvider>
      <CityProvider>
        <BrowserRouter >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="login"  element={<Login />}  />
            <Route path="register"  element={<Register />}  />
            <Route path='/*' element={
              <ProtectedRoutes>
                <Routes>
                  <Route path="/sesion" element={<Home />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/sesion/detail/:id" element={<Detail />} />
                  <Route path="/detail/:id/booking" element ={<Booking/>} />
                  <Route path="/sesion/detail/:id/booking" element ={<Booking/>} />
                  <Route path="/myBookings/:id" element ={<MyBookings/>} />
                </Routes>
              </ProtectedRoutes>
            }>
            </Route>            
          </Routes>
          <Footer />
        </BrowserRouter>
      </CityProvider>
      </FeatureProvider>
      </CalendarProvider>
      </CatProvider>
      </ImgProvider>
      </ProductProvider>
    </AdminProvider>
    </UserProvider>
  )
}
