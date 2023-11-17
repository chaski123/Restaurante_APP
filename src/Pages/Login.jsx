import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import fondo from "../img/bg.svg";
import usuario from "../img/avatar.svg";
import "../css/style.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { loginFetch } from "../api/loginFetch";
import { AuthContext } from "../context/AuthContext";
import { getMeFetch } from "../api/getMeFetch";

const Login = () => {
  // Estado global del usuario -> logueado
  const { login } = useContext(AuthContext);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const focusFunc = (e) => {
    let parent = e.target.parentNode.parentNode;
    parent.classList.add("focus");
  };

  const blurFunc = (e) => {
    let parent = e.target.parentNode.parentNode;
    if (e.target.value.trim() === "") {
      parent.classList.remove("focus");
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Complete todos los campos",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {
      const { access } = await loginFetch(formData);
      const user = await getMeFetch(access);
    
      // Verifica si hay algún error en la respuesta del servidor
      if (user.error) {
        throw new Error(user.error);
      }
    
      // La autenticación fue exitosa
      Swal.fire({
        title: "Perfecto!",
        text: "Datos Correctos",
        icon: "success",
        confirmButtonText: "OK",
      });
      login(access);
      localStorage.setItem('access', access)
      navigate('/home');
    } catch (error) {
      console.error(error.message || "Hubo un problema durante el inicio de sesión.");
    
      // Muestra un mensaje de error genérico
      Swal.fire({
        title: "Error!",
        text: "Datos Incorrectos",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <>
      <div className="bg-dark container-css">
        <div className="img">
          <img src={fondo} alt="img fondo" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src={usuario} alt="avatar user" />
            <h2 className="title">Login</h2>
            <div className="input-div one">
              <div className="i">
                <FaUser />
              </div>
              <div className="div">
                <h5>Email</h5>
                <input
                  type="text"
                  className="input"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <FaLock />
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
            </div>
            <Link to={"/"} className="a" href="##">
              Don't have an account?
            </Link>
            <input type="submit" className="btn-css" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;