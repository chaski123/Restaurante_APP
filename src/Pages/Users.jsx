import React from "react";
import Footer from '../Components/Footer'
import NavBar from "../Components/NavBar";
import CardUser from "../Components/CardUser";

const Users = () => {
      
  return (
    <>
        <NavBar/>
        <div className="title mt-4">
          <h2>Lista De Usuarios</h2>
          <div className="underline-users"></div>
        </div>
        <div className="grid-container-users">
          <CardUser />
        </div>
        <Footer/>
    </>
  );
};

export default Users;
