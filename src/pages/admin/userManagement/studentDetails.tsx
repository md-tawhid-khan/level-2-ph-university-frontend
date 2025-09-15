import { useParams } from "react-router-dom"
import { useGetSpecificStudentUserQuery } from "../../../redux/features/admin/userManagement.api"


export const StudentDetails=()=>{
    const {studentId}=useParams()
    const {data:studentData,isLoading}=useGetSpecificStudentUserQuery(studentId)
    
   console.log(studentData)
    if(isLoading){
        return (<div>
            <h1> data loading -------------</h1>
            </div>)
    }
         
    return (
        <div>
            <h1 style={{ textAlign:'center' }}>student details</h1>
            <div >
                <h3>student name:{studentData?.data?.fullName}</h3>
                <h3>student Id:{studentData?.data?.id}</h3>
                 <h3>contact no:{studentData?.data?.contactNo}</h3>
                <h3>emergencyContactNo:{studentData?.data?.emergencyContactNo}</h3>
              <h3>email:{studentData?.data?.email}</h3>
                  <h3>dateOfBirth:{studentData?.data?.dateOfBirth}</h3>
               <h3>presentAddress:{studentData?.data?.presentAddress}</h3>
                <h3>permanentAddress:{studentData?.data?.permanentAddress}</h3>
               <h3>academicDepartment:{studentData?.data?.academicDepartment?.
name}</h3>
                 <h3>admissionSemester:{studentData?.data?.admissionSemester?.name}</h3>
           
                 
            </div>
        </div>
    )
}
