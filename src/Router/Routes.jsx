import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About/About";
import Contact from "../pages/Home/Contact/Contact";
import LogIn from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/login',
                element: <LogIn/>
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },
        ]
    }
])
export default Routes;