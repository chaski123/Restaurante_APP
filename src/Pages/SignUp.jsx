import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import fondo from "../img/bg.svg";
import usuario from "../img/avatar.svg";
import "../css/style.css";
import {FaUser, FaLock} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'
import { Link } from "react-router-dom";
import { registerFetch } from "../api/registerFetch";

const Loguin = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
  })
  
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

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      
      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      }
    });
  }, []);


  const handleSubmit =  async (e) => {
    e.preventDefault();

    if(!formData.email.trim() || !formData.password.trim()){
      Swal.fire({
        title: 'Error!',
        text: 'Complete los campos de email y/o password',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000
      })
      return
    }

    Swal.fire({
      title: 'Perfecto!',
      text: 'Usuario guardado con exito!!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    try{
        const res = await registerFetch(formData)
        console.log(res)
    }catch(error){
        console.log(error)
    }
    
  };

  const handleChange = (e) =>{
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }

  return (
    <>
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
                <FaUser/>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" 
                className="input" 
                name="name" 
                onChange={handleChange} 
                value={formData.name}/>
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
               <FaUser/>
              </div>
              <div className="div">
                <h5>Lastname</h5>
                <input type="text" 
                className="input" 
                name="lastName" 
                onChange={handleChange} 
                value={formData.lastName}/>
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <MdEmail/>
              </div>
              <div className="div">
                <h5>Email</h5>
                <input type="email" 
                className="input" 
                name="email" 
                onChange={handleChange} 
                value={formData.email}/>
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
               <FaLock/>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" 
                className="input" 
                name="password" 
                onChange={handleChange}
                value={formData.password}/>
              </div>
            </div>
            <Link to={'/login'} className= "a" href="##">already have an account?</Link>
            <input type="submit" className="btn-css" value="SignUp" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Loguin;
