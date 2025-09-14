import { Button, Col,  Row } from "antd"
import { PHForm } from "../../../components/form/PHForm"
import PHInput from "../../../components/form/PHInput"
import { useAddOfferedCourseMutation, useGetAllCoursesQuery, useGetAssignFacultyCoursesQuery, useGetRegisteredSemesterDataQuery } from "../../../redux/features/admin/courseManagement.api"
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch"
import { useState } from "react"
import PHSelect from "../../../components/form/PHSelect"

import { useGetAcademicDepartmentQuery, useGetAcademicFacultyQuery,  } from "../../../redux/features/admin/academicManagement.api"
import PHTimePicker from "../../../components/form/PHTimePicker"
import moment from "moment"

const OfferCourse=()=>{

    const [id,setId]=useState('')
    const [facultyId,setFacultyId]=useState('')

    const [addOfferedCourse,{isLoading}]=useAddOfferedCourseMutation()

   
    const academicDepartmentParams=[{name:'academicFaculty',value:facultyId || ''}] 

   

  //  get all course data ------------

    const {data:courseData, isLoading:CLoading}=useGetAllCoursesQuery(undefined)
  
    const courseDataOptions=courseData?.data?.map(item=>({
           label: `${item.title}`,
          value: item._id,
    }
))

// get all academic faculty data  -------------

const {data:academicFacultyData}=useGetAcademicFacultyQuery(undefined)
  
    const academicFacultyDataOptions=academicFacultyData?.data?.map(item=>({
           label: `${item.name}`,
          value: item._id,
    }
))

//get academic department  which are elegent in  academic faculty ----------

const {data:AcademicDepartmentData , isFetching:fetchingDepartment}=useGetAcademicDepartmentQuery(academicDepartmentParams ,)


  
    const AcademicDepartmentDataOptions=AcademicDepartmentData?.data?.map(item=>({
           label: `${item.name}`,
          value: item._id,
    }
))


// get academic semester data from DB --------------

const {data:academicSemesterData}=useGetRegisteredSemesterDataQuery(undefined)

// console.log({academicSemesterData})
  
    const academicSemesterDataOptions=academicSemesterData?.data?.map(item=>({
           label: `${item?.academicSemester?.name} ${item?.academicSemester?.year} `,
          value: item._id,
    }
))



// get assign faculty in course function -----------

const {data:getCourseWithFaculty,isFetching:fetchingFaculty}=useGetAssignFacultyCoursesQuery(id , {skip:!id})
    
    
    const courseWithFacultyDataOptions=getCourseWithFaculty?.data?.faculties!
.map(item=>({
      label: item.fullName,
          value: item._id,
    }
 
  ))



// date function ---------------

const days=['sat','sun','mon','tue','wed','thu','fri']

const daysOptions=days.map(item=>({
    label:item,
    value:item
}))

//submit function ------------

    const onSubmit=async(data)=>{
        
     const OfferedCourseData = {
        ...data,
        maxCapacity:Number(data.maxCapacity),
        section:Number(data.section),      
        startTime:data.startTime,
        endTime:data.endTime

       }
       console.log({OfferedCourseData})
        const res=await addOfferedCourse(OfferedCourseData)
        console.log({res})
    }

    if(CLoading || isLoading ){
        return (<div>
            <h1>loading --------</h1>
        </div>)
    }
    return (
         
            <PHForm  onSubmit={onSubmit}
             >
               <Row gutter={12}>
                <Col span={12}>
               <PHSelectWithWatch onChangeValue={setFacultyId}  label="academic faculty name" name="academicFaculty" options={academicFacultyDataOptions} />
</Col>
                <Col span={12}>

               <PHSelect disabled={!facultyId || fetchingDepartment}  label="academic department name" name="academicDepartment" options={AcademicDepartmentDataOptions} />
</Col>
               <Col span={12}>
               <PHSelect  label="registered semester name" name="semesterRegistration" options={academicSemesterDataOptions} />
</Col>            
                <Col span={12}>
               <PHSelectWithWatch               
               onChangeValue={setId}
               label='course data' name="course" options={courseDataOptions}/>
  </Col>             
                <Col span={12}>
               <PHSelect disabled={!id || fetchingFaculty} label="faculty name" name="faculty" options={courseWithFacultyDataOptions} />
 </Col>              
                <Col span={12}>
               <PHInput   type="text" name="maxCapacity" label="maxCapacity" ></PHInput>
  </Col>             
               <Col span={12}>
               <PHInput   type="text" name="section" label="section" ></PHInput>
    </Col>           
               <Col span={12}>
               <PHSelect label='days'  mode="multiple" name="days" options={daysOptions} ></PHSelect>
    </Col>           
               <Col span={12}>
               <PHTimePicker label='start time' name='startTime'/>
    </Col> 
               <Col span={12}>
               <PHTimePicker label='end time' name='endTime'/>
    </Col> 
              </Row>

                <Button htmlType="submit">submit</Button>
                
            </PHForm>
        
        
    )
}
export default OfferCourse