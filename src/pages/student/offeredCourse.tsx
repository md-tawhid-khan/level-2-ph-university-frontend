/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from "antd";
import { useGetMyOfferedCourseDataQuery } from "../../redux/features/admin/courseManagement.api";


type TCourses={
    [index:string]:any
}

export const OfferedCourse = () => {
  const { data: getMyOffered } = useGetMyOfferedCourseDataQuery(undefined);
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

  return (
    <Row >
      {
        modifiedData.map(item=>{
            return <Col span={24}>
            <div>
                 <h1>{item.coursTitle}</h1>
            </div>
            <div>
                {
                    item.sections.map(section=>{
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
                            <Col span={4}><Button >enrolled</Button></Col>                           
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
