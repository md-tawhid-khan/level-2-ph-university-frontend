import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import About from "../pages/about"
import Contact from "../pages/contact"
import Login from "../pages/login"
import Register from "../pages/register"
import {  adminPaths} from "./adminRouters";
import routeGenaretor from "../utils/routeGenerator";
import { FacultyPaths } from "./facultyRouters";
import { studentPaths } from "./studentRouters";
import { ProtectedRoute } from "../components/layout/protectedRoute";




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
    element:<ProtectedRoute role="admin"><App/></ProtectedRoute>,
    children:routeGenaretor(adminPaths)
 },
    {
    path:'/faculty',
    element:<ProtectedRoute role="faculty"><App/></ProtectedRoute>,
    children:routeGenaretor(FacultyPaths)
 },
    {
    path:'/student',
    element:<ProtectedRoute role="student"><App/></ProtectedRoute>,
    children:routeGenaretor(studentPaths)
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