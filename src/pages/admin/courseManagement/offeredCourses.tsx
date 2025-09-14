import { Table, type TableColumnsType } from "antd"
import { useGetAllOfferedCoursesQuery } from "../../../redux/features/admin/courseManagement.api"


type TTableData={
    title:string,
    code:number,
}


const OfferedCourses=()=>{

    const {data:getOfferedCourseData,isFetching,isLoading}=useGetAllOfferedCoursesQuery(undefined)

    console.log({getOfferedCourseData})
    
 const tableData = getOfferedCourseData?.data?.map(({_id,title,code})=>({
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
      
      
    ]
             
     if(isLoading){
        return (<div><h1>loading ---------</h1>
        </div>)
    }

    return (<div>
   <Table loading={isFetching} 
   columns={columns} 
   dataSource={tableData} 
    />
    </div>)
}
export default OfferedCourses