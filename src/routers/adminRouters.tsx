import type { ReactNode } from "react"
import AdminDashboard from "../pages/admin/adminDashboard"
import CreateAdmin from "../pages/admin/createAdmin"
import CreateFaculty from "../pages/admin/createFaculty"
import CreateStudent from "../pages/admin/createStudent"
import { NavLink } from "react-router-dom"



type TAdminSiderItem={
  key:string,
  label:ReactNode,
  children?:TAdminSiderItem[]
}

export const adminPaths=[
    {
     name:"Dashboard",
     path:"dashboard",
     element:<AdminDashboard/>
},

   {
    name:"User Management",
    children:[
        {
            name:"Create Admin",
            path:"create-admin",
            element:<CreateAdmin/>
        },
          {
            name:"Create Faculty",
        path:'create-faculty',
        element:<CreateFaculty/>
    },
    {
        name:"Create Student",
        path:'create-student',
        element:<CreateStudent/>
    },
    ]
  }
]






