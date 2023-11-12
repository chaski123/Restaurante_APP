import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import HomePage from '../Pages/HomePage';
import Error404 from '../Pages/Error404';
import Menu from "../Pages/Menu";
import ContactoForm from "../Pages/ContactoForm";
import Users from "../Pages/Users";

// Create a separate component to handle the routing logic
const AppRouter = () => {
    const {user} = useContext(AuthContext)

    return (
        <Routes>
            <Route path="/" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/*" element={<Login/>}/>
            {user ? 
                <Route path="/home" element={<HomePage/>}/>:null}
        </Routes>
    )

}

export default Routes;

