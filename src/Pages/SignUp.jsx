import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import fondo from "../img/bg.svg";
import usuario from "../img/avatar.svg";
import "../css/style.css";
import NavBar from "../Components/NavBar";

const Loguin = () => {
  const inputs = document.querySelectorAll(".input");
  const [users, setUsers] = useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
  })
  //Desestructuring
  const {name, lastName, email, password} = users
  
  function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value === "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name.trim() || !password.trim()){
      Swal.fire({
        title: 'Error!',
        text: 'Complete todos los campos',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000
      })
      return
    }

    Swal.fire({
      title: 'Perfecto!',
      text: 'Datos Correctos',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  };

  const handleChange = (e) =>{
      setUsers({...users, [e.target.name]: e.target.value})
    }

  return (
    <>
      <NavBar/>
      <div className="bg-dark container-css">
        <div className="img">
          <img src={fondo} alt="img fondo" />
        </div>
        <div className="login-content">
          <form
            onSubmit={handleSubmit}
          >
            <img src={usuario} alt="avatar user" />
            <h2 className="title">Sign-Up</h2>
            <div className="input-div one">
              <div className="i">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" 
                className="input" 
                name="name" 
                onChange={handleChange} 
                value={name}/>
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="div">
                <h5>Lastname</h5>
                <input type="text" 
                className="input" 
                name="lastName" 
                onChange={handleChange} 
                value={lastName}/>
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="div">
                <h5>Email</h5>
                <input type="email" 
                className="input" 
                name="email" 
                onChange={handleChange} 
                value={email}/>
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" 
                className="input" 
                name="password" 
                onChange={handleChange}
                value={password}/>
              </div>
            </div>
            <input type="submit" className="btn-css" value="SignUp" />
          </form>
        </div>
      </div>
    </>
    
  );
};

export default Loguin;