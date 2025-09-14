
import AcademicDepartment from "../pages/admin/academicManagement/academicDepartment"
import AcademicFaculty from "../pages/admin/academicManagement/academicFaculty"
import AcademicSemester from "../pages/admin/academicManagement/academicSemester"
import CreateAcademicDepartment from "../pages/admin/academicManagement/createAcademicDepartment"
import CreateAcademicFaculty from "../pages/admin/academicManagement/createAcademicFaculty"
import CreateAcademicSemester from "../pages/admin/academicManagement/createAcademicSemester"
import Courses from "../pages/admin/courseManagement/courses"
import CreateCourse from "../pages/admin/courseManagement/createCourse"
import OfferCourse from "../pages/admin/courseManagement/offerCourse"
import OfferedCourses from "../pages/admin/courseManagement/offeredCourses"
import RegisteredSemester from "../pages/admin/courseManagement/registeredSemester"
import SemesterRegistration from "../pages/admin/courseManagement/semesterRegistration"
import AdminDashboard from "../pages/admin/userManagement/adminDashboard"
import AdminData from "../pages/admin/userManagement/adminData"
import { AdminDetails } from "../pages/admin/userManagement/adminDetails"
import CreateAdmin from "../pages/admin/userManagement/createAdmin"
import CreateFaculty from "../pages/admin/userManagement/createFaculty"
import CreateStudent from "../pages/admin/userManagement/createStudent"
import FacultyData from "../pages/admin/userManagement/facultyData"
import { FacultyDetails } from "../pages/admin/userManagement/facultyDetails"
import StudentData from "../pages/admin/userManagement/studentData"
import { StudentDetails } from "../pages/admin/userManagement/studentDetails"





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
        name:"Create Student",
        path:'create-student',
        element:<CreateStudent/>
    },
      {
        name:"Students Data",
        path:'students-data',
        element:<StudentData/>
    },
    {
        path:'students-data/:studentId',
        element:<StudentDetails/>
    },
        {
            name:"Create Admin",
            path:"create-admin",
            element:<CreateAdmin/>
        },
          {
        name:"Admin Data",
        path:'admin-data',
        element:<AdminData/>
    },
    {
        path:'admin-data/:adminId',
        element:<AdminDetails/>
    },
          {
            name:"Create Faculty",
        path:'create-faculty',
        element:<CreateFaculty/>
    },
     { 
      name:'Faculty Data',      
        path:'faculty-data',
        element:<FacultyData/>
    },
     {
        path:'faculty-data/:facultyId',
        element:<FacultyDetails/>
    },
    
    ]
  },

  {
    name:"Course Management",
    children:[
      {
        name:"Semester Registration",
        path:"semester-registration",
        element:<SemesterRegistration/>
      },
      {
        name:"Registered Semester",
        path:"registered-semester",
        element:<RegisteredSemester/>
      },
      {
        name:"Create Course",
        path:"create-course",
        element:<CreateCourse/>
      },
      {
        name:"Courses",
        path:"courses",
        element:<Courses/>
      },
      {
        name:"Offer Course",
        path:"offer-course",
        element:<OfferCourse/>
      },
      {
        name:"Offered Course",
        path:"offered-course",
        element:<OfferedCourses/>
      },
    ]
  }
]






