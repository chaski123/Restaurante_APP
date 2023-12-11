import React, { useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaLocationDot, FaPhone, FaGlobe } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

const ContactoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    matter: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.matter.trim() === "" ||
      formData.message.trim() === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
      return;
    } else {
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado con éxito",
        text: "Gracias por contactarnos....",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        matter: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="body-form ">
        <div className="content animate__animated animate__pulse">
          <h1 className="logo_contact">
            Contact <span>Us</span>
          </h1>
          <div className="contact-wrapper ">
            <div className="contact-form">
              <h3>
                Contact <span>Us</span>
              </h3>
              <form onSubmit={handleSubmit}>
                <p>
                  <label>Nombre Completo</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <label>Correo Electronico</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@test.com"
                  />
                </p>
                <p>
                  <label>Telefono</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="111-4444-333"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </p>
                <p>
                  <label>Asunto</label>
                  <input
                    type="text"
                    name="matter"
                    value={formData.matter}
                    onChange={handleChange}
                  />
                </p>
                <p className="block">
                  <label>Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </p>
                <p className="block">
                  <button type="submit">Enviar</button>
                </p>
              </form>
            </div>
            <div className="contact-info">
              <h4>Mas Info</h4>
              <ul>
                <li>
                  <FaLocationDot className="i" />
                  Baker Street
                </li>
                <li>
                  <FaPhone className="i" />
                  (+123) 456-7890
                </li>
                <li>
                  <GrMail className="i" />
                  info@entreamigos.com
                </li>
                <li>
                  <FaGlobe className="i" />
                  entreamigos.com
                </li>
              </ul>
              <p>
                Nuestro restaurante "Entre Amigos" es un lugar de encuentro para
                amantes de la buena comida. Nuestra misión es brindar
                experiencias culinarias excepcionales a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactoForm;
