import React from "react";
import NavBarUser from "../Components/NavBarUser";
import Main from "../Components/Main";
import NavBarAdmin from "../Components/NavBarAdmin";
import InfoResto from "./InfoResto";

const HomePage = () => {
  const userAdmin = false
  return (
    <>
      {userAdmin ? <NavBarAdmin/> : <NavBarUser/>}
      <Main/>
    </>
  );
};

export default HomePage;
