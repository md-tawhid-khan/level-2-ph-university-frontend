
import AcademicDepartment from "../pages/admin/academicManagement/academicDepartment"
import AcademicFaculty from "../pages/admin/academicManagement/academicFaculty"
import AcademicSemester from "../pages/admin/academicManagement/academicSemester"
import CreateAcademicDepartment from "../pages/admin/academicManagement/createAcademicDepartment"
import CreateAcademicFaculty from "../pages/admin/academicManagement/createAcademicFaculty"
import CreateAcademicSemester from "../pages/admin/academicManagement/createAcademicSemester"
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
      name:"Create A. Semester",
      path:"create-academic-semester",
      element:<CreateAcademicSemester/>
    },
    {
      name:"Academic Semester",
      path:"academic-semester",
      element:<AcademicSemester/>
    },
    {
      name:"create A. Faculty",
      path:"create-academic-faculty",
      element:<CreateAcademicFaculty/>
    },
    {
      name:"Academic Faculty",
      path:"academic-faculty",
      element:<AcademicFaculty/>
    },
    {
      name:"Create A. Department",
      path:"create-academic-department",
      element:<CreateAcademicDepartment/>
    },
    {
      name:"Academic Department",
      path:"academic-department",
      element:<AcademicDepartment/>
    },
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






