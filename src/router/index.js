import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import Menu from "../Pages/Menu";
import Carrito from "../Pages/Carrito";
import Users from "../Pages/Users";
import ContactoForm from "../Pages/ContactoForm";
import Pedidos from "../Pages/Pedidos";

const AppRouter = () => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.role === "administrador";

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/*" element={<Login />} />
      {isAdmin ? (
        <>
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/contacto" element={<ContactoForm />} />
          <Route path="/pedidos" element={<Pedidos />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<ContactoForm />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
