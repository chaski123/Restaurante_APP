import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login';
import HomePage from '../Pages/HomePage'
import Menu  from '../Pages/Menu'
import Carrito from '../Pages/Carrito';
/* 
configura las rutas de la aplicación para mostrar diferentes componentes según la URL actual. 
*/
const AppRouter = () => {
	const { user } = useContext(AuthContext);
	
	return (
		<Routes>
			<Route path="/" element={<SignUp />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<Login />} />
			{user ? (
				<>
					<Route path="/home" element={<HomePage />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/carrito" element={<Carrito />} />
				</>
			) : null}
		</Routes>
	);
};

export default AppRouter;

