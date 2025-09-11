import { useParams } from "react-router-dom"
import { useGetSpecificAdminUserQuery} from "../../../redux/features/admin/userManagement.api"



export const AdminDetails=()=>{
    const {adminId}=useParams()
    const {data:adminData,isLoading}=useGetSpecificAdminUserQuery(adminId)
    
   console.log(adminData)
    if(isLoading){
        return (<div>
            <h1> data loading -------------</h1>
            </div>)
    }
         

    return (
        <div>
            <h1 style={{ textAlign:'center' }}>Admin details</h1>
            <div >
                <h3>Faculty name:  {adminData.data.fullName}</h3>
                <h3>Faculty Id:    {adminData.data.id}</h3>
                 <h3>contact no:{adminData.data.contactNo}</h3>
                <h3>emergencyContactNo:{adminData.data.emergencyContactNo}</h3>
              <h3>email:{adminData.data.email}</h3>
                  <h3>dateOfBirth:{adminData.data.dateOfBirth}</h3>
               <h3>presentAddress:{adminData.data.presentAddress}</h3>
                <h3>permanentAddress:{adminData.data.permanentAddress}</h3>
               <h3>academicDepartment:{adminData.data.managementDepartment.
name}</h3>
            
           
                 
            </div>
        </div>

    )
}
