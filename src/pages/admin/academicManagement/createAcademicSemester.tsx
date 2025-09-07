import '@ant-design/v5-patch-for-react-19';
import type { FieldValues, SubmitHandler } from "react-hook-form"
import { PHForm } from "../../../components/form/PHForm"
import { Button, Col, Flex } from "antd"
import PHSelect from '../../../components/form/PHSelect';
import { semesterOptions } from '../../../constantTs/semester';
import { monthOptions } from '../../../constantTs/global';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicSemesterSchema } from '../../../schema/academicManagement.schema';
import { useAddAcademicSemesterMutation } from '../../../redux/features/admin/academicManagement.api';
import { toast } from 'sonner';
import type { TResponse } from '../../../types/global';




const currentYear=new Date().getFullYear()
const yearOptions=[0,1,2,3,4].map(number=>({
    value:String(currentYear+number),
    label:String(currentYear+number) ,
}))


const CreateAcademicSemester=()=>{

    const [sendAcademicSemesterData]=useAddAcademicSemesterMutation()

    
    const onSubmit : SubmitHandler<FieldValues>=async (data)=>{

       const toastId= toast.loading("creating ----------")
     
      const name=semesterOptions[Number(data.name)-1].label

        const semesterData={
            name,
            code:data?.name ,
            year:data?.year,
            startMonth:data?.startMonth,
            endMonth:data?.endMonth,
        }
    try {
        const res=await sendAcademicSemesterData(semesterData) as TResponse
        if(res?.error) {
           toast.error(res?.error?.data?.message,{id:toastId})
        }
        else{
            toast.success("user created",{id:toastId})
        }
       
    } catch (error) {
        toast.error("something went wrong",{id:toastId})
        // console.log(error)
    }
        
        
       
    }
    
    return (
        <Flex  justify='center' align="center" >
        <Col span={6}>
            <PHForm onSubmit={onSubmit}
           resolver={zodResolver(academicSemesterSchema)}
             >
                
               <PHSelect label='semesterName' name="name" options={semesterOptions}/>
               <PHSelect label='semesterYear' name="year" options={yearOptions}/>
                <PHSelect label='startMonth' name="startMonth" options={monthOptions}/>
                <PHSelect label='endMonth' name="endMonth" options={monthOptions}/>
                <Button htmlType="submit">submit</Button>
            </PHForm>
        </Col>
        </Flex>
    )
}

export default CreateAcademicSemester