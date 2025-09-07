import '@ant-design/v5-patch-for-react-19';
import type { FieldValues, SubmitHandler } from "react-hook-form"
import { PHForm } from "../../../components/form/PHForm"
import { Button, Col, Flex } from "antd"
import PHSelect from '../../../components/form/PHSelect';

const nameOptions=[
    {value:'01',label:'autumn'},
    {value:'02',label:'fall'},
    {value:'03',label:'summer'}
] ;

const currentYear=new Date().getFullYear()
const yearOptions=[0,1,2,3,4].map(number=>({
    value:String(currentYear+number),
    label:String(currentYear+number) ,
}))

console.log(yearOptions)

const CreateAcademicSemester=()=>{
    const onSubmit : SubmitHandler<FieldValues>=(data)=>{
     
      const name=nameOptions[Number(data.name)-1].label

        const semesterData={
            name,
            code:data.name ,
            year:data.year,
        }
    
        console.log(semesterData)
    }
    return (
        <Flex  justify='center' align="center" >
        <Col span={6}>
            <PHForm onSubmit={onSubmit}>
                
               <PHSelect label='semesterName' name="name" options={nameOptions}/>
               <PHSelect label='semesterYear' name="year" options={yearOptions}/>
                <Button htmlType="submit">submit</Button>
            </PHForm>
        </Col>
        </Flex>
    )
}

export default CreateAcademicSemester