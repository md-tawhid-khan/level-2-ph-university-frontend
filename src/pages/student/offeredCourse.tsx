/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from "antd";
import { useEnrolledOfferedCourseMutation, useGetMyOfferedCourseDataQuery } from "../../redux/features/student/studentCourse.api";
import { toast } from "sonner";


type TCourses={
    [index:string]:any
}

export const OfferedCourse = () => {
  const { data: getMyOffered, isLoading:OLoading } = useGetMyOfferedCourseDataQuery(undefined);

const [addEnrolledCourse,{isLoading:ELoading}]=useEnrolledOfferedCourseMutation()

  const singleObject = getMyOffered?.data?.reduce((acc:TCourses, item) => {
    const key = item.course.title;
    acc[key] = { coursTitle: key, sections: [] };

    acc[key].sections.push({
      section: item.section,
      _id: item._id,
      days: item.days,
      startTime: item.startTime,
      endTime: item.endTime,
    });

    return acc;
  }, {});

  const modifiedData = Object.values(singleObject ? singleObject : {});

  const handleEnroll=async(id)=>{
    const enrolledData={
        offeredCourse:id
    }

    try {
        const res=await addEnrolledCourse(enrolledData)
        if(res.error){
            toast.error(res.error.data.message)
        }
        toast.success("successfully enrolled in this course")
    } catch (error) {
        toast.error("failed to enrolled  this course")
    }
    
  }

  if(OLoading || ELoading){
    return (
        <div><h1> loading data ----------- </h1>
        </div>
    )
  }

  return (
    <Row >
      {
        modifiedData.map(dataItem=>{
            
            return <Col span={24}>
            <div>
                 <h1>{dataItem.coursTitle}</h1>
            </div>
            <div>
                {
                    dataItem.sections.map(section=>{
                        return<Row 
                        justify='space-between'
                        align='middle'>
                            <Col span={5}>section : {section.section}</Col>
                            <Col span={5}>days : {
                            section.days.map(day=>{
                                return (
                                    <span>{day}</span>
                                )
                            })
                            }</Col>
                            <Col span={5}>start time : {section.startTime}</Col>
                            <Col span={5}>end time : {section.endTime}</Col>
                            <Col span={4}><Button onClick={()=>handleEnroll(section._id)} >enrolled</Button></Col>                           
                        </Row>
                    })
                }
            </div>
            </Col>
        })
      }
    </Row>
  );
};
