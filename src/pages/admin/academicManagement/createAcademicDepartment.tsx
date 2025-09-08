import { Button,  } from "antd"
import { PHForm } from "../../../components/form/PHForm"
import PHInput from "../../../components/form/PHInput"
import { useAddAcademicDepartmentMutation, useGetAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api"
import PHSelect from "../../../components/form/PHSelect"
import { zodResolver } from "@hookform/resolvers/zod"
import { academicDepartmentSchema } from "../../../schema/academicManagement.schema"
import { toast } from "sonner"


const CreateAcademicDepartment=()=>{

    const {data:academicFacultyData,isLoading }=useGetAcademicFacultyQuery(undefined)

    const [addAcademicDepartment]=useAddAcademicDepartmentMutation()
    
    if(isLoading){
        return(
            <div><h1>Faculty  Data loading ------------</h1></div>
        )
    }
    // console.log(academicFacultyData)

    const facultyName=academicFacultyData?.data?.map(({_id,name})=>({
   key:_id,
   value:_id,
   label:name
    }))
     

    const onSubmit=async(data)=>{
   
   const departmentData={
    name:data.name,
    academicFaculty:data.academicFaculty
   }
   console.log({departmentData})
try {
    const res=await addAcademicDepartment(departmentData)
   if(res?.error){
    toast.error(res?.error?.data?.message)
   }
   else{
    toast.success('successfully create academic department')
   }
} catch (error) {
    console.log({error})
}
   
    }

    return (
        <div>
            <PHForm
             onSubmit={onSubmit}
             resolver={zodResolver(academicDepartmentSchema)}
            >
                <PHInput type="text" name="name" label="Department Name"></PHInput>
                <PHSelect label="Academic faculty" name="academicFaculty" options={facultyName}></PHSelect>
                <Button htmlType="submit">submit</Button>
            </PHForm>
        </div>
    )
}
export default CreateAcademicDepartment