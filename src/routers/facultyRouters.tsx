import FacultyDashboard from "../pages/faculty/facultyDashboard";
import MyCourses from "../pages/faculty/MyCourses";
import MyStudent from "../pages/faculty/myStudent";


export const FacultyPaths=[

    {
        name:"DashBoard",
        path:"dashboard",
        element:<FacultyDashboard/>
    },
    {
        name:"My Courses",
        path:"my-courses",
        element:<MyCourses/>
    },
    {
        path:"courses/:registeredSemesterId/:coursesId",
        element:<MyStudent/>
    }
]