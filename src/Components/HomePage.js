import React from "react";
import Logo from "../img/Logo restaurante circular negro.png";
import UserImg from '../img/USER.png'
import BtnHeader from "./Btnheader";

const HomePage = () => {
  return (
    <>
      <header className="header-container">
        <div className="header-container__logo">
        <link
        rel="stylesheet"
        href="/ruta/absoluta/hacia/bootstrap-icons.css"
        />
          <img
            className="header-container__img"
            src={Logo}
            alt="Logo-png"
          />
        </div>
        <nav className="header-nav">
          <BtnHeader class={'header-nav__link hover-underline-animation'} content={'PEDIDOS'} href={'#'}/>
          <BtnHeader class={'header-nav__link hover-underline-animation'} content={'MENU'} href={'#'}/>
          <BtnHeader class={'header-nav__link hover-underline-animation'} content={'CONTACTO'} href={'#'}/>
          <BtnHeader class={'header-nav__link hover-underline-animation'} content={'LOGUIN'} href={'#'}/>
          <BtnHeader class={'header-nav__link hover-underline-animation'} content={'SIGN-UP'} href={'#'}/>
        </nav>
        <div className="header-login">
          <img src={UserImg} alt="user-img" className="IconUser"/> ADMIN
        </div>
      </header>
      <main className="main-container">
        <div className="div-main">
          <span className="span-circle"></span>
        </div>  
      </main>
    </>
  );
};

export default HomePage;
