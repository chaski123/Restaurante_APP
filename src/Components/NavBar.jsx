import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../img/Logo restaurante circular negro.png";
import userAdmin from '../img/USER.png'
import UserCliente from "../img/userLogoNavBar.jpg";

const NavBar = () => {
  const userAd = true
  return (
    (userAd ? <nav className="navbar navbar-expand-lg bg-dark ">
    <div className="container-fluid">
      <Link to={'/'}><img className="header-container__img" src={Logo} alt="logo"/></Link>
      <button
        className="navbar-toggler bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link to="/" className='header-nav__link hover-underline-animation Home'>INICIO</Link>
          <Link to="/menu" className='header-nav__link hover-underline-animation'>MENUS</Link>
          <Link to="/pedidos" className='header-nav__link hover-underline-animation'>PEDIDOS</Link>
          <Link to="/usuarios" className='header-nav__link hover-underline-animation'>USUARIOS</Link>
        </ul>
      </div>
    </div>
    <div className="header-login">
      <img className='IconUser' src={userAdmin} alt='user'/>
  </div>
</nav> 
: 
<nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link to={'/'}><img className="header-container__img" src={Logo} alt="logo"/></Link>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" className='header-nav__link hover-underline-animation Home'>INICIO</Link>
              <Link to="/menu" className='header-nav__link hover-underline-animation'>MENUS</Link>
              <Link to="/carrito" className='header-nav__link hover-underline-animation'>CARRITO</Link>
              <Link to="/login" className='header-nav__link hover-underline-animation'>INGRESAR</Link>
              <Link to="/sign-up" className='header-nav__link hover-underline-animation'>REGISTRARSE</Link>
            </ul>
          </div>
        </div>
        <div className="header-login">
          <img className='IconUser' src={UserCliente} alt='user'/>
      </div>
      </nav>
      )
    
  )
}

export default NavBar