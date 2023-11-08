import React from 'react'
import Error from '../img/Error404-2.png';
import Header from '../Components/Header';

const Error404 = () => {
  return (
    <>
      <Header/>
      <div className='container-fluid text-center mt-3'>
          <img width={'1200px'}  src={Error} alt='Error 404'/>
      </div>
    </>
    
  )
}

export default Error404