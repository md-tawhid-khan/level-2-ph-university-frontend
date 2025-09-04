import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import About from "../pages/about"
import Contact from "../pages/contact"
import Login from "../pages/login"
import Register from "../pages/register"
import {  adminPaths} from "./adminRouters";
import routeGenaretor from "../utils/routeGenaretor";


 const router=createBrowserRouter([
    {
    path:'/',
    element:<App/>,
    children:[
        {
            index:true,
            element:<About/>
        },
        {
            path:'about',
            element:<About/>
        },
        {
            path:'contact',
            element:<Contact/>
        }
    ]
 },
    {
    path:'/admin',
    element:<App/>,
    children:routeGenaretor(adminPaths)
 },
 {
    path:'/login',
    element:<Login/>
 },
 {
    path:'/register',
    element:<Register/>
 }
])

export default router