import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Whatsapp, BoxArrowInRight, PersonFill } from 'react-bootstrap-icons';

const Footer = () =>{
    const whatsappURL = 'https://tu-url-de-whatsapp.com';
    const facebookURL = 'https://tu-url-de-facebook.com';
    const twitterURL = 'https://tu-url-de-twitter.com';
    return(
    <footer className="footer-container bg-dark">
        <div className="footer-container__login">
        <Link to={'/login'} className="footer-container__link"><PersonFill className="me-1"/>Ingresar</Link>
        <Link to={'/sign-up'} className="footer-container__link"><BoxArrowInRight className="me-1"/>Registrarse</Link>
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
            <Link to={'/contacto'} className='footer-container__contacto-link'>Contactanos Aqui</Link>
        </div>
    </footer>
    )
}

export default Footer