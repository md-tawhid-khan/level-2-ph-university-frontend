import { Col, Row } from "antd";
import { useGetAllEnrolledCourseQuery } from "../../redux/features/student/studentCourse.api";

const MySchedule = () => {
  const { data: allEnrolledCourse, isLoading: ELoading } =
    useGetAllEnrolledCourseQuery(undefined);

  console.log(allEnrolledCourse);
  if (ELoading) {
    return (
      <div>
        <p>Data loading --------------</p>
      </div>
    );
  }
  return (
    <Row>
      <Col span={24}>
        {allEnrolledCourse.data.map((item) => (
          <Row justify="space-between" align="middle">
            <Col span={8}>
              <h1>{item.offeredCourse.course.title}</h1>
            </Col>
            <Col span={8}>
              <p> section : {item.offeredCourse.section}</p>
            </Col>
            <Row gutter={8} style={{ gap: "18px" }}>
              {item.offeredCourse.days.map((day) => (
                <p> {day} </p>
              ))}
            </Row>
          </Row>
        ))}
      </Col>
    </Row>
  );
};

export default MySchedule;
