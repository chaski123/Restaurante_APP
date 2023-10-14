import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../img/Logo restaurante circular negro.png";
import UserCliente from '../img/userLogoNavBar.jpg'

const NavBarUser = () => {
  return (
    <header className="bg-dark header-container">
      <div className="header-container__logo">
      <Link to="/"> <img
          className="header-container__img"
          src={Logo}
          alt="Logo-png"
        /></Link>
        
      </div>
      <nav className="header-nav">
        <Link to="/" className='header-nav__link hover-underline-animation'>HOME</Link>
        <Link to="/menus" className='header-nav__link hover-underline-animation'>MENUS</Link>
        <Link to="/contacto" className='header-nav__link hover-underline-animation'>CONTACTO</Link>
        <Link to="/loguin" className='header-nav__link hover-underline-animation'>LOGUIN</Link>
        <Link to="/sign-up" className='header-nav__link hover-underline-animation'>SIGNUP</Link>
        {/* <div className='burguer-menu'>
          <span><FontAwesomeIcon className='i' icon={faBars} /></span>
        </div> */}
      </nav>
      <div className="header-login">
          <img className='IconUser' src={UserCliente} alt='user'/>
      </div>
    </header>
  )
}

export default NavBarUser