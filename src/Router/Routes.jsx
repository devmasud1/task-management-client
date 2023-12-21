import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About/About";
import Contact from "../pages/Home/Contact/Contact";

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
        ]
    }
])
export default Routes;