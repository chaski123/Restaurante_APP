import { createBrowserRouter } from "react-router-dom";
import Loguin from '../Pages/Loguin';
import SignUp from '../Pages/SignUp'
import HomePage from '../Pages/HomePage'
import Error404 from '../Pages/Error404'
import Menu from "../Pages/Menu";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <Error404/>
    },
    {
        path: '/loguin',
        element: <Loguin/>,
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
    }
])