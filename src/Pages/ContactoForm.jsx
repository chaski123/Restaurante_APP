import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPhone,
  faInbox,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const ContactoForm = () => {

    const EnviarForm = (e) =>{
        e.preventDefault();
    }
  return (
    <>
    <NavBar/>
    <div className="body-form ">
      <div className="content animate__animated animate__bounce">
        <h1 className="logo_contact">Contact <span>Us</span></h1>
        <div className="contact-wrapper ">
          <div className="contact-form">
            <h3>
              Contact <span>Us</span>
            </h3>
            <form action="">
              <p>
                <label>Nombre Completo</label>
                <input
                  type="text"
                  name="full-name"
                  placeholder="John Doe"
                ></input>
              </p>
              <p>
                <label>Correo Electronico</label>
                <input
                  type="email"
                  name="adress"
                  placeholder="juan@test.com"
                ></input>
              </p>
              <p>
                <label>Telefono</label>
                <input type="tel" name="phone"></input>
              </p>
              <p>
                <label>Asunto</label>
                <input type="text" name="asunto"></input>
              </p>
              <p className="block">
                <label>Mensaje</label>
                <textarea
                  name="mensaje"
                  cols={30}
                  rows={3}
                  placeholder="Escriba Aqui..."
                ></textarea>
              </p>
              <p className="block">
                <button onClick={(e)=>EnviarForm(e)} type="submit">Enviar</button>
              </p>
            </form>
          </div>
          <div className="contact-info">
            <h4>Mas Info</h4>
            <ul>
              <li>
                <FontAwesomeIcon className="i" icon={faLocation} />
                Baker Street
              </li>
              <li>
                <FontAwesomeIcon className="i" icon={faPhone} />
                (+123) 456-7890
              </li>
              <li>
                <FontAwesomeIcon className="i" icon={faInbox} />
                info@entreamigos.com
              </li>
              <li>
                <FontAwesomeIcon className="i" icon={faGlobe} />
                entreamigos.com
              </li>
            </ul>
            <p>
              Nuestro restaurante "Entre Amigos" es un lugar de encuentro para amantes de la
              buena comida. Nuestra misión es brindar experiencias culinarias
              excepcionales a nuestros clientes. 
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default ContactoForm;
