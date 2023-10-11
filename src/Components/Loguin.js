import React from 'react'


const Loguin = () => {
  const enviarFormulario = (e) =>{
      e.preventDefault();
  }
  return (
    <>
        <form onSubmit={(e) =>{enviarFormulario(e)}}>
          <input type='text'
          placeholder='Ingrese su usuario...'
          className='form-control mb-2'
          name='user'/>
          <input type='password'
          placeholder='Ingrese su contrasenia...'
          className='form-control mb-2'
          name='password'/>
          <button type='submit'
          className='btn btn-success'>Ingresar</button>
        </form>
    </>
  )
}

export default Loguin