import React, { useState, useEffect } from "react";
import { deleteFood } from "../api/deleteFood";
import { getFoodFetch } from "../api/getFoodFetch";
import logo from "../img/MenuLogo.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { TiDelete } from "react-icons/ti";
import { updateFoods } from "../api/updateFood";
import Modal from "../Components/Modal";
import { FaDotCircle, FaMoneyBillAlt, FaImages, FaEdit } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";

const Menu = () => {
  const [food, setFood] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItemData, setSelectedItemData] = useState({
    name: "",
    state: "",
    details: "",
    price: "",
    image: "",
  });

  const openModal = (id) => {
    const selectedFood = food.find((item) => item._id === id);
    setSelectedItemData({
      name: selectedFood.name,
      state: selectedFood.state,
      details: selectedFood.details,
      price: selectedFood.price,
      image: selectedFood.image,
    });
    setModalOpen(true);
    console.log(selectedFood._id, selectedItemData);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getFoodFetch()
      .then((data) => setFood(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmitDelete = async (id) => {
    try {
      await deleteFood(id);
      // Actualizar el estado de 'food' eliminando el elemento con el ID correspondiente
      setFood((prevFood) => prevFood.filter((item) => item._id !== id));
    } catch (error) {
      console.error(
        error.message || "Hubo un problema al eliminar el elemento."
      );
    }
  };

  const handleSubmitUpdate = async (id, data) => {
    try {
      await updateFoods(id, data);
    } catch (error) {
      console.error(error.message || "Hubo un problema al editar el elemento.");
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
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => openModal(item._id)}
                  >
                    <Modal isOpen={isModalOpen} closeModal={closeModal}>
                      <form className="form-modal" onSubmit={handleSubmit}>
                        <div className="div">
                          <div className="i-modal">
                            <MdFastfood />
                          </div>
                          <div>
                            <h5 className="h5-modal">Name</h5>
                            <input
                              type="text"
                              className="input-modal"
                              name="name"
                              placeholder={`${selectedItemData.name}`}
                            />
                          </div>
                        </div>
                        <div className="div">
                          <div className="i-modal">
                            <FaDotCircle />
                          </div>
                          <div>
                            <h5 h5-modal>State</h5>
                            <input
                              type="text"
                              className="input-modal"
                              name="state"
                              placeholder={`${selectedItemData.state}`}
                            />
                          </div>
                        </div>
                        <div className="div">
                          <div className="i-modal">
                            <FcViewDetails />
                          </div>
                          <div>
                            <h5 className="h5-modal">Details</h5>
                            <textarea
                              type="text"
                              name="details"
                              className="input-modal"
                              placeholder={`${selectedItemData.details}`}
                            />
                          </div>
                        </div>
                        <div className="div">
                          <div className="i-modal">
                            <FaMoneyBillAlt />
                          </div>
                          <div>
                            <h5 className="h5-modal">Price</h5>
                            <input
                              type="text"
                              name="price"
                              className="input-modal"
                              placeholder={`${selectedItemData.price} USD `}
                            />
                          </div>
                        </div>
                        <div className="div">
                          <div className="i-modal">
                            <FaImages />
                          </div>
                          <div>
                            <input
                              type="file"
                              accept="image/*"
                              name="image"
                              className="input-modal"
                            />
                          </div>
                        </div>
                        <input
                          className="btn btn-success mt-2 w-50 m-auto"
                          type="submit"
                          value="Aceptar"
                          onClick={() =>
                            handleSubmitUpdate(
                              selectedItemData._id,
                              selectedItemData
                            )
                          }
                        />
                      </form>
                      <button
                        className="btn btn-danger mt-2 w-50 m-auto"
                        onClick={closeModal}
                      >
                        Cerrar Modal
                      </button>
                    </Modal>
                    <FaEdit className="fs-5 me-1" />
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleSubmitDelete(item._id)}
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
