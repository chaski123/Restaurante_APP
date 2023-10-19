import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Whatsapp } from 'react-bootstrap-icons';

const Footer = () =>{
    const whatsappURL = 'https://tu-url-de-whatsapp.com';
    const facebookURL = 'https://tu-url-de-facebook.com';
    const twitterURL = 'https://tu-url-de-twitter.com';
    return(
    <footer className="footer-container bg-dark">
        <div className="footer-container__login">
        <Link to={'/loguin'} className="footer-container__link">Ingresar</Link>
        <Link to={'/sign-up'} className="footer-container__link">Registrarse</Link>
        </div>
        <div className="footer-container__redes-sociales">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                <Whatsapp className="whatsapp" />
            </a>
            <a href={facebookURL} target="_blank" rel="noopener noreferrer">
                <Facebook className="facebook" />
            </a>
            <a href={twitterURL} target="_blank" rel="noopener noreferrer">
                <Twitter className="twitter"/>
            </a>
        </div>
        <div className="footer-container__contacto">
            <Link to={'/contacto'} className='footer-container__contacto-link'/>Contactanos Aqui
        </div>
    </footer>
    )
}

export default Footer