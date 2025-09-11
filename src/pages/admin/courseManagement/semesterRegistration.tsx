/* eslint-disable @typescript-eslint/no-explicit-any */
import '@ant-design/v5-patch-for-react-19';
import type { FieldValues, SubmitHandler } from "react-hook-form"
import { PHForm } from "../../../components/form/PHForm"
import { Button, Col,  Flex } from "antd"
import PHSelect from '../../../components/form/PHSelect';
import { toast } from 'sonner';
import PHDatePicker from '../../../components/form/PHDatePicker';
import PHInput from '../../../components/form/PHInput';
import { useGetAcademicSemesterQuery } from '../../../redux/features/admin/academicManagement.api';
import type { TResponse } from '../../../types';
import { useAddSemesterRegistrationMutation } from '../../../redux/features/admin/courseManagement.api';
import { semesterStatusOptions } from '../../../constantTs/semester';


const SemesterRegistration=()=>{

    const {data:academicSemesterData,isLoading:SLoading}=useGetAcademicSemesterQuery(undefined) ;

    const [addSemesterRegistration,{isLoading}]=useAddSemesterRegistrationMutation()

    const semesterOptions = academicSemesterData?.data!.map((item) => ({
    label: `${item.name} ${item.year}`,
    value: item._id,
  }));
    
    const onSubmit : SubmitHandler<FieldValues>=async (data)=>{

        // console.log({data})


        const semesterRegistrationData={
            academicSemester:data?.academicSemester,
            status:data?.status,
            startDate:data?.startDate,
            endDate:data?.endDate,
            minCredit:Number(data?.minCredit),
            maxCredit:Number(data?.maxCredit)
        }
    
        console.log(semesterRegistrationData)


    
         try {
                const res=await addSemesterRegistration(semesterRegistrationData) as TResponse<any>
                console.log({res})
                if(res?.error) {
                   toast.error(res?.error?.data?.message,)
                }
                else{
                    toast.success("user created",)
                }
               
            } catch (error) {
                toast.error("something went wrong",)
                console.log(error)
            }
                
       
    }
    
    if(SLoading || isLoading ){
    
     return (<div><h1> loading ---------</h1></div>)
     
}
    return (
        <Flex  justify='center' align="center" >
        <Col span={6}>
            <PHForm onSubmit={onSubmit}
             >
                
               <PHSelect label='semesterName' name="academicSemester" options={semesterOptions}/>
               <PHSelect label='status' name="status" options={semesterStatusOptions}/>
               
               <PHDatePicker name='startDate' label='Start date'></PHDatePicker>
               <PHDatePicker name='endDate' label='End date'></PHDatePicker>
               <PHInput type='text' name='minCredit' label='Min Credit' ></PHInput>
               <PHInput type='text' name='maxCredit' label='Max Credit' ></PHInput>
                <Button htmlType="submit">submit</Button>
            </PHForm>
        </Col>
        </Flex>
    )
}

export default SemesterRegistration