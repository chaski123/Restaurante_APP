import { createBrowserRouter } from "react-router-dom";
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp'
import HomePage from '../Pages/HomePage'
import Error404 from '../Pages/Error404'
import Menu from "../Pages/Menu";
import ContactoForm from "../Pages/ContactoForm";
import Users from "../Pages/Users";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <Error404/>
    },
    {
        path: '/login',
        element: <Login/>,
        errorElement: <Error404/>
    },
    {
        path: '/sign-up',
        element: <SignUp/>,
        errorElement: <Error404/>
    },
    {
        path: '/menu',
        element: <Menu/>,
        errorElement: <Error404/>
    },
    {
        path: '/contacto',
        element: <ContactoForm/>,
        errorElement: <Error404/>
    },
    {
        path: '/usuarios',
        element: <Users/>,
        errorElement: <Error404/>
    }
])