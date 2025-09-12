import { Button, Col, Flex } from "antd"
import { PHForm } from "../../../components/form/PHForm"
import PHInput from "../../../components/form/PHInput"
import { useGetAllCoursesQuery, useGetAssignFacultyCoursesQuery } from "../../../redux/features/admin/courseManagement.api"
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch"
import { useState } from "react"

const OfferCourse=()=>{

    const [id,setId]=useState('')

    console.log("inside course id",id)

    const {data:courseData}=useGetAllCoursesQuery(undefined)
  
    const courseDataOptions=courseData?.data.map(item=>({
           label: `${item.title}`,
          value: item._id,
    }))

    // const {data:getCourseWithFaculty}=useGetAssignFacultyCoursesQuery(undefined)
    // console.log({getCourseWithFaculty})

   

    const onSubmit=(data)=>{
        console.log(data)
    }

    return (
         <Flex  justify='center' align="center" >
        <Col span={6}>
            <PHForm onSubmit={onSubmit}
             >
                
               <PHSelectWithWatch  onChangeValue={setId}
               label='course data' name="courseData" options={courseDataOptions}/>
               <PHInput disabled={!id} type="text" name="test" label="test" ></PHInput>
               
                <Button htmlType="submit">submit</Button>
            </PHForm>
        </Col>
        </Flex>
        
    )
}
export default OfferCourse