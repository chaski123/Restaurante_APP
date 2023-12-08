import React, { useContext } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import CardUser from "../Components/CardUser";
import { AuthContext } from "../context/AuthContext";

// Mostrar solo los usuarios logueados en en la pagina
// actualizar su estado en el servidor

const Users = () => {
  const { user } = useContext(AuthContext);
  return user.role === "administrador" ? (
    <>
      <Header />
      <div className="title mt-4">
        <h2>Lista De Usuarios</h2>
        <div className="underline-users"></div>
      </div>
      <div className="grid-container-users">
        <CardUser />
      </div>
      <Footer />
    </>
  ) : (
    <span className="alert alert-danger" role="alert">
      No tiene acceso a esta seccion
    </span>
  );
};

export default Users;
