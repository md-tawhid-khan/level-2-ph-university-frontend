import { useGetAllEnrolledCourseQuery } from "./studentCourse.api";

const MySchedule=()=>{

 const {data:allEnrolledCourse,isLoading:ELoading}=useGetAllEnrolledCourseQuery(undefined)

console.log(allEnrolledCourse)
 if(ELoading){
    return <div><p>Data loading --------------</p></div>
 }
    return (<div>
        {
            allEnrolledCourse.data.map(item=>(
                <div>
                    <h1>{item.offeredCourse.course.title}</h1>
                    <p> section : {item.offeredCourse.section}</p>
                    <div>
                        {
                            item.offeredCourse.days.map(day=>(
                                <p>{day}</p>
                            ))
                        }
                    </div>
                </div>
                
            ))
        }
    </div>)
}

export default MySchedule ;