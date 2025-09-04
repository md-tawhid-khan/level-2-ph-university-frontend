import FacultyDashboard from "../pages/faculty/facultyDashboard";
import OfferedCourse from "../pages/faculty/offeredCourse";


export const FacultyPaths=[

    {
        name:"DashBoard",
        path:"dashboard",
        element:<FacultyDashboard/>
    },
    {
        name:"Offered Course",
        path:"offered-course",
        element:<OfferedCourse/>
    }
]