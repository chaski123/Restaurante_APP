import React, { useState, useEffect, useContext } from "react";
import { deleteFood } from "../api/deleteFood";
import { getFoodFetch } from "../api/getFoodFetch";
import { updateFoods } from "../api/updateFood";
import { AuthContext } from "../context/AuthContext";
import logo from "../img/MenuLogo.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AgregarFoodForm from "../Components/AgregarFoodForm";
import Modal from "../Components/Modal";
import { TiDelete } from "react-icons/ti";
import {
  FaDotCircle,
  FaMoneyBillAlt,
  FaImages,
  FaEdit,
  FaCartPlus,
  FaHamburger,
} from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";

const Menu = () => {
  const { user } = useContext(AuthContext);
  const isAdmin = user.role === "administrador";
  const isUser = user.role === "user";
  const [food, setFood] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItemData, setSelectedItemData] = useState({
    name: "",
    state: "",
    details: "",
    price: "",
    image: "",
  });

  // Esto es para actualizar los datos de los placeholder dentro del modal por eso el id
  const openModal = (id) => {
    const selectedFood = food.find((item) => item._id === id);
    if (selectedFood) {
      const { name, state, details, price, image } = selectedFood;
      setSelectedItemData({ name, state, details, price, image });
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Para evitar el comportamiento por defecto del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getFoodFetch()
      .then((data) => setFood(data))
      .catch((error) => console.log(error));
  }, []);

  // Para eliminar los datos de la comida
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

  // Para actualizar los datos de la comida
  const handleSubmitUpdate = async (id, data) => {
    try {
      await updateFoods(id, data);
      getFoodFetch().then((data) => setFood(data));
    } catch (error) {
      console.error(error.message || "Hubo un problema al editar el elemento.");
    }
  };

  // Para manejar dinamicamente los valores de los inputs del form
  const handleInputChange = (e, field) => {
    setSelectedItemData({
      ...selectedItemData,
      [field]: e.target.value,
    });
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
            <article key={item._id} className="menu-item-admin">
              {isAdmin && (
                <ul className="list-group ">
                  <li className="list-group-item">
                    <img
                      src={"http://localhost:3977/" + item.image}
                      alt={item.image}
                      className="photo"
                    />
                  </li>
                  <li className="list-group-item">{item.name}</li>
                  <li className="list-group-item">${item.price}</li>
                  <li className="list-group-item">{item.details}</li>
                  <li className="list-group-item">
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => openModal(item._id)}
                    >
                      <FaEdit className="fs-5 me-1" />
                      Editar
                    </button>
                    <Modal isOpen={isModalOpen} closeModal={closeModal}>
                      <form className="form-modal" onSubmit={handleSubmit}>
                        <div className="div">
                          <div className="i-modal">
                            <FaHamburger />
                          </div>
                          <div>
                            <h5>Name</h5>
                            <input
                              type="text"
                              className="input-modal"
                              name="name"
                              placeholder={`${selectedItemData.name}`}
                              onChange={(e) => handleInputChange(e, "name")}
                            />
                          </div>
                        </div>
                        <div className="div">
                          <div className="i-modal">
                            <FaDotCircle />
                          </div>
                          <div>
                            <h5>State</h5>
                            <input
                              type="text"
                              className="input-modal"
                              name="state"
                              placeholder={`${selectedItemData.state}`}
                              onChange={(e) => handleInputChange(e, "state")}
                            />
                          </div>
                        </div>
                        <div className="div">
                          <div className="i-modal">
                            <FcViewDetails />
                          </div>
                          <div>
                            <h5>Details</h5>
                            <textarea
                              type="text"
                              name="details"
                              className="input-modal"
                              placeholder={`${selectedItemData.details}`}
                              onChange={(e) => handleInputChange(e, "details")}
                            />
                          </div>
                        </div>
                        <div className="div">
                          <div className="i-modal">
                            <FaMoneyBillAlt />
                          </div>
                          <div>
                            <h5>Price</h5>
                            <input
                              type="text"
                              name="price"
                              className="input-modal"
                              placeholder={`${selectedItemData.price} USD `}
                              onChange={(e) => handleInputChange(e, "price")}
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
                              onChange={(e) => handleInputChange(e, "image")}
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
                        className="btn btn-danger mt-2 w-20 m-auto"
                        onClick={closeModal}
                      >
                        Cerrar Modal
                      </button>
                    </Modal>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleSubmitDelete(item._id)}
                    >
                      <TiDelete className="fs-5 me-1" />
                      Eliminar
                    </button>
                  </li>
                </ul>
              )}
              {isUser && (
                <article key={item._id} className="menu-item-user">
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
                      <button className="btn btn-success">
                        <FaCartPlus className="fs-5 me-2" />
                        Agregar
                      </button>
                    </div>
                  </div>
                </article>
              )}
            </article>
          ))}
        </div>
      </section>
      <AgregarFoodForm />
      <Footer />
    </>
  );
};

export default Menu;
