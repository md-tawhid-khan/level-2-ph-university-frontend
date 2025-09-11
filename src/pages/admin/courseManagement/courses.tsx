import { Button, Modal, Table, type TableColumnsType, type TableProps } from "antd";
import type { TQueryParams } from "../../../types";
import { useState } from "react";
import { useAddFacultyInCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";
import { PHForm } from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { useGetFacultyDataQuery } from "../../../redux/features/admin/userManagement.api";
import { toast } from "sonner";

type TTableData={
    title:string,
    code:number,
}

const Courses=()=>{
        const [params,setParams]=useState<TQueryParams[]>([]) ;
  
        const {data:getCourseData,isFetching,isLoading}=useGetAllCoursesQuery(params)

         console.log(getCourseData)
       
         const tableData = getCourseData?.data?.map(({_id,title,code})=>({
              key:_id,
              title,
              code,
             }))



      const columns:TableColumnsType<TTableData> = [
      {
        title: 'title',
        dataIndex: 'title',
        
      },
      {
        title: 'code',
        dataIndex: 'code',
      },
      
      {
        title: 'Action',
        key: 'x',
        render:(item)=>{
          return <div>
            <AssignFacultyModal courseId={item}/>
          </div>
        }    
      },
    ]

    const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
      if(extra.action==="filter"){
        const paramsQuery:TQueryParams[]=[]
        filters.name?.forEach(item=>(
          paramsQuery.push({name:'name',value:item})
        ))
        filters.year?.forEach(item=>(
          paramsQuery.push({name:'year',value:item})
        ))
    
       setParams(paramsQuery) 
      }
    };

    if(isLoading){
        return (<div><h1>loading ---------</h1>
        </div>)
    }
    
    return (<div>
   <Table loading={isFetching} 
   columns={columns} 
   dataSource={tableData} 
   onChange={onChange} />
    </div>)
}


const AssignFacultyModal=({courseId})=>{

     const [isModalOpen, setIsModalOpen] = useState(false);

     const [assignFacultyInCourse]=useAddFacultyInCourseMutation()

     const {data:facultyData}=useGetFacultyDataQuery(undefined)
     const facultyDataOptions=facultyData?.data?.map(item=>({
        value:item._id,
        label:item.fullName
     }))

      const showModal = () => {
    setIsModalOpen(true);
  };
   const onSubmit=async(data)=>{
    
    const assignFaculty={
        faculties:data.faculties
    }

    const assignCourseFaculty={
        data:assignFaculty,
        courseId:courseId.key
    }

   try {
     const res=await assignFacultyInCourse(assignCourseFaculty)
     console.log({res})
      if(res?.error) {
       toast.error(res?.error?.data?.message,)
        }
      else{
      toast.success("assign faculty in course successfully",)
         }
   } catch (error) {
    toast.error("something went wrong",)
     console.log(error)
   }

    setIsModalOpen(false)
    
   }
    const handleCancel = () => {
    setIsModalOpen(false);
  };
    return(<> <Button type="primary" onClick={showModal}>
        assign faculty
      </Button>
      <Modal
        title="assign faculty"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onCancel={handleCancel}
        
      >
        <PHForm onSubmit={onSubmit}>
            <PHSelect mode="multiple" label="faculty" name="faculties" options={facultyDataOptions} ></PHSelect>
            <Button htmlType="submit">submit</Button>
        </PHForm>
      </Modal>
    </>
  );
}


export default Courses