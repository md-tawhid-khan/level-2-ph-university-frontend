
import AcademicSemester from "../pages/admin/academicManagement/academicSemester"
import AdminDashboard from "../pages/admin/adminDashboard"
import CreateAdmin from "../pages/admin/createAdmin"
import CreateFaculty from "../pages/admin/createFaculty"
import CreateStudent from "../pages/admin/createStudent"




export const adminPaths=[
    {
     name:"Dashboard",
     path:"dashboard",
     element:<AdminDashboard/>
},
{
  name:"Academic Management",
  children:[
    {
      name:"Academic Semester",
      path:"academic-semester",
      element:<AcademicSemester/>
    }
  ]
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






