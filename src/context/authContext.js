import { useState, createContext, useEffect } from 'react';
import { getMeFetch } from '../api/getMeFetch';
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
	// usuario estatico (de momento no existe)
	const [user, setUser] = useState(null);

	// Funcion autoejecutable ()()
	useEffect(()=>{
		(async () =>{
			const token = localStorage.getItem('access')
			await login(token)
		})()
	}, [])
	const login = async (token) =>{
		try{
			const user = await getMeFetch(token) 
			delete user.password
			setUser(user)
		}
		catch(error){
			console.log(error)
		}
	}

	// los datos para utilizar en todo el sitio web
	const data = {
		user,
		setUser,
		login,
	};

	// el contexto
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};