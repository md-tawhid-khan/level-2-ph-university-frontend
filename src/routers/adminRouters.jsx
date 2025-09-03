import AdminDashboard from "../pages/admin/adminDashboard"
import CreateAdmin from "../pages/admin/createAdmin"
import CreateFaculty from "../pages/admin/createFaculty"
import CreateStudent from "../pages/admin/createStudent"

const adminPaths=[
    {
     name:"dashboard",
     path:"dashboard",
     element:<AdminDashboard/>
},

   {
    name:"user management",
    children:[
        {
            name:"create admin",
            path:"create-admin",
            element:<CreateAdmin/>
        },
          {
            name:"create faculty",
        path:'create-faculty',
        element:<CreateFaculty/>
    },
    {
        name:"create student",
        path:'create-student',
        element:<CreateStudent/>
    },
    ]
  }
]

export const adminRoutes= adminPaths.reduce((acc,item)=>{
    
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
