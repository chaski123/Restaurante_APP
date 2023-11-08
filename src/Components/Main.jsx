import React from "react";
import Logo from '../img/LogoRestaurante.png'
import { Link } from "react-router-dom";
import 'animate.css'

const Main = () => {
    return (
      <div>
        <main className="main-container">
          <div className="main-container__principal animate__animated animate__fadeInLeftBig">
            <h1 className="main-container__titulo">
            Comida <span>Deliciosa</span> momentos <span>Deliciosos.</span>
            </h1>
            <p className="main__description">
              Cada día, acudimos a trabajar con la esperanza de conseguir dos cosas:
              compartir el mejor momento con nuestros amigos, disfutar de una incrible comida y convertirlo en un recuerdo unico para ti. Así era cuando abrió la primera tienda
              Entre Amigos en 1991, y así continúa siendo hoy.
            </p>
            <div className="container_btn">
              <Link to={'/contacto'} className="btn btn-success me-2">Contactanos</Link>
              <Link to={'/menu'} className="btn btn-success">Nuestro Menu</Link>
            </div>
          </div>
          <div className="main-container__logo">
              <img className="main-container__img animate__animated animate__fadeInRightBig" src={Logo} alt="Logo Restaurante" /> 
          </div>
        </main>
      </div>
    );
  };
  
  export default Main;