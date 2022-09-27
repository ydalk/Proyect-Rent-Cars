import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import cancel from '../../../assets/images/cancel.png'
import burguer from '../../../assets/images/menu.png'
import { UserContext } from '../../../context/useContext'
import { BurguerDiv, ButtonR, ButtonL, Cancel, Container1, Container2, Image, Wrapper, ContUser, Span, P, Data, Close, Menu } from './HeaderStyle'
import { AdminContext } from '../../../context/useContextCars'


export const Header = () => {

  const mystyle = {
    color: "white"
  };

  const {logged, logout} = useContext (UserContext);
  const {users} = useContext (AdminContext);

  

  const [showMobile, setShowMobile] = useState(false);
  const {pathname} = useLocation();
  
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('userData'));
  

  let visibilityL = 'block'
  let visibilityR = 'block'
  let visibilityB = 'block'
  let componente = ''

 const closeSesion = ()=>{
  logout()
  navigate("/", {
    replace: true
  });
 }

  
  if(pathname === '/login'){
    visibilityL = 'none'
  }else if(pathname === '/register'){
    visibilityR = 'none'
  }else if(pathname === '/sesion' || pathname ==='/sesion/detail/2' || pathname ==='/sesion/detail/2/booking'){
    visibilityL = 'none'
    visibilityR = 'none'
    visibilityB = 'none'
  }else if(pathname === '/'){
    visibilityL = 'block'
    visibilityR = 'block'
  }
    
  users && users?.filter(usuario => (usuario?.email === user?.email ))
  .map((usuario)=>( usuario?.role?.id == 2 
    
    ?
    componente =
    <>
      <p> <Link to={'/admin'} style={mystyle}> Administración </Link> </p>
      <hr/>
    </>
    
    :
    componente =
    <>
      <p> <Link to={`/myBookings/${usuario.userId}`} style={mystyle}> Mis reservas </Link></p>
      <hr/>
    </>
  ))

  return (
    <Wrapper>
      <Container1>
        <Link to={'/'}>
            <Image id="imagen1"src={logo} alt='logo'></Image>
        </Link>
        </Container1>
        <BurguerDiv 
          onClick={()=>{setShowMobile(!showMobile)}} 
          visibilityB = {visibilityB}>
          {
            showMobile ? 
            <Cancel id= "cerrarHamburger"src = {cancel} alt='close' ></Cancel> :
            <Menu id= "ingresarHamburger" src = {burguer} alt='menu'></Menu>
          }
          </BurguerDiv>
      {
        logged ? 
        
        <ContUser>
           { componente }
          <Span id="nombre">{user?.name.charAt(0).toUpperCase() + user?.lastName.charAt(0).toUpperCase() }</Span>
          <div>
            <P>Hola,</P>
            <Data>{user?.name + ' ' +user?.lastName}</Data>
          </div>
            <Close onClick={closeSesion} title='Logout'> X </Close>
            
        </ContUser> 
       
       :

       <Container2 open = {showMobile}>
          <Link to={'/register'}>
            <ButtonR id="btnCrearCuenta" onClick={()=>{setShowMobile(!showMobile)}} visibilityR = {visibilityR} >Crear cuenta</ButtonR>
          </Link>
          <Link to={'/login'}>
            <ButtonL id="btnIniciarSesion" onClick={()=>{setShowMobile(!showMobile)}} visibilityL = {visibilityL} >Iniciar sesión</ButtonL>
          </Link>          
       </Container2>

      }
      
    </Wrapper>
  )
}

