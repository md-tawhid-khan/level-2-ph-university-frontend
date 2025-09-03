import type { ReactNode } from "react"
import AdminDashboard from "../pages/admin/adminDashboard"
import CreateAdmin from "../pages/admin/createAdmin"
import CreateFaculty from "../pages/admin/createFaculty"
import CreateStudent from "../pages/admin/createStudent"
import { NavLink } from "react-router-dom"


type TRoutes={
    path:string,
    element:ReactNode
}
type TAdminSiderItem={
  key:string,
  label:ReactNode,
  children?:TAdminSiderItem[]
}

const adminPaths=[
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

export const adminSiderItems=adminPaths.reduce((acc:TAdminSiderItem[],item)=>{
      if(item.name && item.path){
        acc.push({
          key:item.name,
          label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        })
      }
      if(item.children){
       acc.push({
        key:item.name,
        label:item.name,
        children:item.children.map(child=>({
          key:child.name,
          label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
        }))
       })
      }
      return acc 
},[])




// programatic way to create admin routes

export const adminRoutes= adminPaths.reduce((acc:TRoutes[],item)=>{
    
    if(item.path && item.element){
        acc.push({
            path:item.path,
            element:item.element,
        })
         
    }
   
    if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path:child.path,
        element:child.element
      })
    })
  }
  return acc
},[])
