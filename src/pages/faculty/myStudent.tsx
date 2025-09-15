import { useParams } from "react-router-dom"
import { useAddStudentMarksMutation, useGetAllStudentInCourseDataQuery,} from "../../redux/features/faculty/facultyCourse.api"
import { Button, Modal, Pagination, Space, Table, type TableColumnsType } from "antd"
import { useState } from "react"
import { PHForm } from "../../components/form/PHForm"
import PHInput from "../../components/form/PHInput"

export type TTableData={
    fullName:string;
    id:string ;
}

const MyStudent=()=>{

    const {registeredSemesterId,coursesId}=useParams()
    const [page,setPage]=useState(1)

    const {data:studentData,isLoading,isFetching}=useGetAllStudentInCourseDataQuery([{ name:"limit",value:"3"},
            {name:"page",value:page},
            {name:"sort",value:'id'} ,{name:'semesterRegistration',value:registeredSemesterId},{name:'course',value:coursesId}] )

    console.log({studentData})


    const tableData = studentData?.data!.map(({_id,student,semesterRegistration,offeredCourse})=>({
     key:_id,
     fullName:student.fullName,
     id:student.id,
     semesterRegistration:semesterRegistration._id,
     offeredCourse:offeredCourse._id,
     student:student._id,
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
          
             <AddStuendtMarksByFaculty studentInfo={item}/>
          
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



const AddStuendtMarksByFaculty=({studentInfo})=>{
    
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [addStudentMark,{isLoading}]=useAddStudentMarksMutation()
     

     const showModal = () => {
    setIsModalOpen(true);
  };
     
   const handleCancel = () => {
    setIsModalOpen(false);
  };

   const onSubmit=async(data)=>{
    const marksData={
        semesterRegistration:studentInfo.semesterRegistration,
        offeredCourse:studentInfo.offeredCourse,
        student:studentInfo.student,
        courseMarks:{
            classTest1:Number(data.classTest1),
            midTerm:Number(data.midTerm),
            classTest2:Number(data.classTest2),
            finalTerm:Number(data.finalTerm)
        }  
    }

   const res= await addStudentMark(marksData)
   console.log({res})
   }

   if(isLoading){
    return <div><h1>loading mark</h1>
    </div>
   }
   
    return(<> <Button type="primary" onClick={showModal}>
        addStudentMark
      </Button>
      <Modal
      footer={null} 
        title="add Student Mark"
        closable={{ 'aria-label': 'Custom Close Button' }} 
         open={isModalOpen}
          onCancel={handleCancel}
      >
        <PHForm onSubmit={onSubmit}>
            <PHInput type="text" name="classTest1" label="Class Test 1"></PHInput>
            <PHInput  type="text" name="midTerm" label="mid term "></PHInput>
            <PHInput type="text" name="classTest2" label="Class Test 2"></PHInput>
            <PHInput type="text" name="finalTerm" label="final term"></PHInput>
            <Button htmlType="submit">submit</Button>
        </PHForm>
      </Modal>
    </>
  );
}


export default MyStudent


