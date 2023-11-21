import React, { useState, useEffect } from "react";
import { deleteFood } from "../api/deleteFood";
import { getFoodFetch } from "../api/getFoodFetch";
import logo from "../img/MenuLogo.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { Modal } from "@mui/material";

const Menu = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    getFoodFetch()
      .then((data) => setFood(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (id) => {
    try {
      // Llamada a la función deleteFood con el ID específico
      await deleteFood(id);

      // Actualizar el estado de 'food' eliminando el elemento con el ID correspondiente
      setFood((prevFood) => prevFood.filter((item) => item._id !== id));
    } catch (error) {
      console.error(
        error.message || "Hubo un problema al eliminar el elemento."
      );
    }
  };

  return (
    <>
      <Header />
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo restaurante" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center">
          {food.map((item) => (
            <article key={item._id} className="menu-item">
              <img
                src={"http://localhost:3977/" + item.image}
                alt={item.image}
                className="photo"
              />
              <div className="item-info">
                <header>
                  <h4>{item.name}</h4>
                  <h4 className="price">${item.price}</h4>
                </header>
                <p className="item-text">{item.details}</p>
                <div className="mt-3">
                  <button className="btn btn-warning me-2">
                    <FaEdit className="fs-5 me-1" />
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleSubmit(item._id)}
                  >
                    <TiDelete className="fs-5 me-1" />
                    Eliminar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Menu;
