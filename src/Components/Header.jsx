import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo restaurante circular negro.png";
import userAdmin from "../img/USER.png";
import UserCliente from "../img/userLogoNavBar.jpg";
import {
  MdShoppingBasket,
  MdFastfood,
  MdExitToApp,
  MdRestaurantMenu,
} from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import { useCart } from "../context/CartProvider";

const NavBar = () => {
  const { cart } = useCart();
  const { user, logout } = useContext(AuthContext);
  return user.role === "administrador" ? (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <Link to={"/home"}>
          <img className="header-container__img" src={Logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler bg-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link
              to="/home"
              className="header-nav__link hover-underline-animation Home"
            >
              <AiFillHome className="fs-3 me-1 pb-1" />
              INICIO
            </Link>
            <Link
              to="/menu"
              className="header-nav__link hover-underline-animation"
            >
              <MdFastfood className="fs-3 me-1 pb-1" />
              MENUS
            </Link>
            <Link
              to="/pedidos"
              className="header-nav__link hover-underline-animation"
            >
              <MdRestaurantMenu className="fs-3 me-1 pb-1" />
              PEDIDOS
            </Link>
            <Link
              to="/usuarios"
              className="header-nav__link hover-underline-animation"
            >
              <FaUsers className="fs-3 me-1 pb-1" />
              USUARIOS
            </Link>
            <button className="btn btn-danger ms-4 m-auto" onClick={logout}>
              <MdExitToApp className="fs-3 me-1 pb-1" />
              SALIR
            </button>
          </ul>
        </div>
      </div>
      <div className="header-login">
        <img className="IconUser" src={userAdmin} alt="user" />
        <span className=" mt-2 text-primary ">{user.name.toUpperCase()}</span>
      </div>
    </nav>
  ) : (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <Link to={"/home"}>
          <img className="header-container__img" src={Logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler bg-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link
              to="/home"
              className="header-nav__link hover-underline-animation Home"
            >
              <AiFillHome className="fs-3 me-1 pb-1" />
              INICIO
            </Link>
            <Link
              to="/menu"
              className="header-nav__link hover-underline-animation"
            >
              <MdFastfood className="fs-3 me-1 pb-1" />
              MENUS
            </Link>
            <Link
              to="/carrito"
              className="header-nav__link hover-underline-animation"
            >
              <MdShoppingBasket className="fs-3 me-1 pb-1" />
              CARRITO
              {cart.length > 0 && (
                <span className="cart-count ms-2">{cart.length}</span>
              )}
            </Link>
            <button className="btn btn-danger ms-4 m-auto" onClick={logout}>
              <MdExitToApp className="fs-3 me-1 pb-1" />
              SALIR
            </button>
          </ul>
        </div>
      </div>
      <div className="header-login">
        <img className="IconUser" src={UserCliente} alt="user" />
        <span className=" mt-2 text-primary ">{user.name.toUpperCase()}</span>
      </div>
    </nav>
  );
};

export default NavBar;
