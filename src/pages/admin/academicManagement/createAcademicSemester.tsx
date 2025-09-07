import '@ant-design/v5-patch-for-react-19';
import type { FieldValues, SubmitHandler } from "react-hook-form"
import { PHForm } from "../../../components/form/PHForm"
import { Button, Col, Flex } from "antd"
import PHSelect from '../../../components/form/PHSelect';
import { semesterOptions } from '../../../constantTs/semester';
import { monthOptions } from '../../../constantTs/global';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicSemesterSchema } from '../../../schema/academicManagement.schema';




const currentYear=new Date().getFullYear()
const yearOptions=[0,1,2,3,4].map(number=>({
    value:String(currentYear+number),
    label:String(currentYear+number) ,
}))


const CreateAcademicSemester=()=>{
    const onSubmit : SubmitHandler<FieldValues>=(data)=>{
     
      const name=semesterOptions[Number(data.name)-1].label

        const semesterData={
            name,
            code:data?.name ,
            year:data?.year,
            startMonth:data?.startMonth,
            endMonth:data?.endMonth,
        }
    
        console.log(semesterData)
       
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