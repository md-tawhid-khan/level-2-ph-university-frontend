import { Button } from "antd"
import { PHForm } from "../../../components/form/PHForm"
import PHInput from "../../../components/form/PHInput"
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api"
import { zodResolver } from "@hookform/resolvers/zod"
import { academicFacultySchema } from "../../../schema/academicManagement.schema"
import type {  FieldValues, SubmitHandler } from "react-hook-form"
import { toast } from "sonner"
import type {  TResponse } from "../../../types"
import type { TAcademicFaculty } from "../../../types/academicManagement.type"

const CreateAcademicFaculty=()=>{
          const [addAcademicFaculty,]=useAddAcademicFacultyMutation()
    const onSubmit:SubmitHandler<FieldValues>=async(data)=>{

        const academicFaculty={
            name:data.name

        }
    // console.log(academicFaculty)
          try {
            const res=await addAcademicFaculty(academicFaculty) as TResponse<TAcademicFaculty>
            if(res?.error) {
             
           toast.error(res?.error?.data?.message,) as string
        }
        else{
            toast.success("create academic faculty successfully",)
        }
          } catch (error) {
             console.log(error)
          }
    }

    return (
        <div>
            <PHForm
             onSubmit={onSubmit}
              resolver={zodResolver(academicFacultySchema)}
            >
                <PHInput type="text" name="name" label="faculty"></PHInput>
                <Button htmlType="submit">submit</Button>
            </PHForm>
        </div>
    )
}

export default CreateAcademicFaculty