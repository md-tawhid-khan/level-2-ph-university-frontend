import { Button, Col, Row } from "antd"
import { useGetCoursesDataQuery } from "../../redux/features/faculty/facultyCourse.api"
import { PHForm } from "../../components/form/PHForm"
import PHSelect from "../../components/form/PHSelect"
import { useNavigate } from "react-router-dom"

const MyCourses=()=>{
    const {data:facultyCourseData,isLoading}=useGetCoursesDataQuery(undefined)
    const navigate=useNavigate()    

    console.log({facultyCourseData})

    const semesterOptions=facultyCourseData?.data?.map(item=>({
        label:`${item.academicSemester.name} ${item.academicSemester.year}`,
        value:item.semesterRegistration._id
    }))
    const CourseOptions=facultyCourseData?.data?.map(item=>({
        label:`${item.course.title} `,
        value:item.course._id
    }))

    const onSubmit =(data)=>{
        navigate(`/faculty/courses/${data?.semesterRegistration}/${data?.course}`)
        // console.log({data})
    }

    if(isLoading){
        return <div><p>data loading -----------</p></div>
    }
    return( <Row justify='center' align='middle'>
       <Col span={8}>
        <PHForm onSubmit={onSubmit}>
             <PHSelect label="Semester" name="semesterRegistration" options={semesterOptions} />
             <PHSelect label="Course" name="course" options={CourseOptions}  />
             <Button   htmlType="submit"> submit</Button>
        </PHForm>
       </Col>
    </Row>)
}

export default MyCourses