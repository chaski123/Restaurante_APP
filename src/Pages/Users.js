import React from "react";
import Footer from '../Components/Footer'
import NavBar from "../Components/NavBar";
import CardUser from "../Components/CardUser";

const Users = () => {
      
  return (
    <>
        <NavBar/>
        <div className="grid-container-users">
            <CardUser/>
        </div>
        <Footer/>
    </>
  );
};

export default Users;
