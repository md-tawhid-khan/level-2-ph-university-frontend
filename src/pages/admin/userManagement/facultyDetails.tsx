import { useParams } from "react-router-dom"
import { useGetSpecificFacultyUserQuery } from "../../../redux/features/admin/userManagement.api"



export const FacultyDetails=()=>{
    const {facultyId}=useParams()
    const {data:facultyData,isLoading}=useGetSpecificFacultyUserQuery(facultyId)
    
   console.log(facultyData)
    if(isLoading){
        return (<div>
            <h1> data loading -------------</h1>
            </div>)
    }
         
    return (
        <div>
            <h1 style={{ textAlign:'center' }}>Faculty details</h1>
            <div >
                <h3>Faculty name:  {facultyData.data.fullName}</h3>
                <h3>Faculty Id:    {facultyData.data.id}</h3>
                 <h3>contact no:{facultyData.data.contactNo}</h3>
                <h3>emergencyContactNo:{facultyData.data.emergencyContactNo}</h3>
              <h3>email:{facultyData.data.email}</h3>
                  <h3>dateOfBirth:{facultyData.data.dateOfBirth}</h3>
               <h3>presentAddress:{facultyData.data.presentAddress}</h3>
                <h3>permanentAddress:{facultyData.data.permanentAddress}</h3>
               <h3>academicDepartment:{facultyData.data.academicDepartment.
name}</h3>
            
           
                 
            </div>
        </div>

    )
}
