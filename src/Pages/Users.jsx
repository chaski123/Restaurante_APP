import React from "react";
import Footer from '../Components/Footer'
import Header from "../Components/Header";
import CardUser from "../Components/CardUser";

const Users = () => {
      
  return (
    <>
        <Header/>
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
