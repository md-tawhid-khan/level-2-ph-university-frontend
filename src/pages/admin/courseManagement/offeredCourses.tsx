import { Table, Tag, type TableColumnsType } from "antd";
import { useGetAllOfferedCoursesQuery } from "../../../redux/features/admin/courseManagement.api";

type TTableData = {
  title: string;
  code: number;
};

const OfferedCourses = () => {
  const {
    data: getOfferedCourseData,
    isFetching,
    isLoading,
  } = useGetAllOfferedCoursesQuery(undefined);

  console.log({ getOfferedCourseData });

  const tableData = getOfferedCourseData?.data?.map(
    ({
      _id,
      semesterRegistration,
      academicFaculty,
      academicDepartment,
      course,
    }) => ({
      key: _id,
      faculty: academicFaculty.name,
      department: academicDepartment.name,
      course: course.title,
      status: semesterRegistration.status,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Faculty",
      dataIndex: "faculty",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Course",
      dataIndex: "course",
    },
    {
      title: "Status",
      dataIndex: "status",
      render:(item)=>{
              let color ;
              if(item==='UPCOMING'){
                 color='blue' ;
              }
              if(item==='ONGOING'){
                    color='green' ;
              }
              if(item==='END'){
                    color='red' ;
              }
              return <Tag color={color}>{item}</Tag>
          }
    },
  ];

  if (isLoading) {
    return (
      <div>
        <h1>loading ---------</h1>
      </div>
    );
  }

  return (
    <div>
      <Table loading={isFetching} columns={columns} dataSource={tableData} />
    </div>
  );
};
export default OfferedCourses;
