import React, { useState } from "react";
import Swal from "sweetalert2";
import { createFood } from "../api/createFood";

const FoodForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    price: "",
    state: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name.trim() === "" ||
      formData.details.trim() === "" ||
      formData.price.trim() === "" ||
      /^\d+$/.test(formData.price) ||
      formData.state.trim() === "" ||
      formData.category.trim() === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
      return;
    }
    try {
      await createFood(formData);
      Swal.fire({
        icon: "success",
        title: "Comida creada con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error al crear la comida:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al crear la comida",
      });
    }
    // Reiniciar el formulario después de enviar
    setFormData({
      name: "",
      details: "",
      price: "",
      state: "",
      category: "",
      image: "",
    });
  };

  return (
    <div className="container mt-5 bg-dark text-white mb-2 p-3">
      <h2>Agregar Comida</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="details" className="form-label">
            Ingredientes
          </label>
          <textarea
            className="form-control"
            id="details"
            name="details"
            rows="4"
            value={formData.details}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Precio
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            Estado
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            Categoria
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="state" className="form-label">
            Imagen
          </label>
          <input
            type="file"
            className="form-control"
            id="imagen"
            name="imagen"
            accept="image/*"
            value={formData.image}
            onChange={handleChange}
          />
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
