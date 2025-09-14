import { OfferedCourse } from "../pages/student/offeredCourse";
import { StudentDashboard } from "../pages/student/studentDashboard";
import MySchedule from "../redux/features/student/mySchedule";

export const studentPaths=[
     {
     name:"Dashboard",
     path:"dashboard",
     element:<StudentDashboard/>
},
     {
     name:"Offered Course",
     path:"offered-course",
     element:<OfferedCourse/>
},
     {
     name:"My Schedule",
     path:"my-schedule",
     element:<MySchedule/>
},
]