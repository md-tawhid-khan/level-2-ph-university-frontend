import { useParams } from "react-router-dom"
import { useGetAllStudentInCourseDataQuery,} from "../../redux/features/faculty/facultyCourse.api"
import { Button, Pagination, Space, Table, type TableColumnsType } from "antd"
import { useState } from "react"

const MyStudent=()=>{

    const {registeredSemesterId,coursesId}=useParams()
    const [page,setPage]=useState(1)

    const {data:studentData,isLoading,isFetching}=useGetAllStudentInCourseDataQuery([{ name:"limit",value:"3"},
            {name:"page",value:page},
            {name:"sort",value:'id'} ,{name:'semesterRegistration',value:registeredSemesterId},{name:'course',value:coursesId}] )

    // console.log({studentData})


    const tableData = studentData?.data!.map(({_id,student})=>({
     key:_id,
     fullName:student.fullName,
     id:student.id
    }))

      const metaData=studentData?.meta ;

    const columns: TableColumnsType<TTableData> = [
      {
        title: 'Name',
        dataIndex: 'fullName'
      },
      {
        title: 'roll',
        dataIndex: 'id',   
      },
      
      
      
      {
        title: 'Action',
        key: 'x',
        render:(item)=>{    
          return <Space>
          
             <Button>update</Button>
          
          </Space>
        } ,
        width:'1%', 
      },
    ]

    if(isLoading){
        return <div><h1>data loading ------</h1></div>
    }

    return( 
        <div>
        <Table loading={isFetching} columns={columns} dataSource={tableData} 
   pagination={false} />
   <Pagination
   current={page}  
   pageSize={metaData?.limit}
    total={metaData?.total}/>
    </div>
    )
}

export default MyStudent