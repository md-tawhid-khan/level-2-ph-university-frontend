import { Button, Pagination, Space, Table, type TableColumnsType, type TableProps } from "antd";
import { useState } from "react";
import type { TQueryParams, TStudent } from "../../../types";
import { useGetStudentDataQuery } from "../../../redux/features/admin/userManagement.api";
import { Link } from "react-router-dom";

export type TTableData=Pick<TStudent,"fullName"|"id"|"email"|"contactNo">


const StudentData=()=>{
   const [params,setParams]=useState<TQueryParams[]>([])
   const [page,setPage]=useState(1)
    const  {data:studentData,isLoading,isFetching}=useGetStudentDataQuery(
        [{ name:"limit",value:"3"},
            {name:"page",value:page},
            {name:"sort",value:'id'} ,...params])

   const tableData = studentData?.data!.map(({_id,id,fullName,email,contactNo})=>({
     key:_id,
     id,
     fullName,
     email,
     contactNo
    }))

    const metaData=studentData?.meta ;

    const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    dataIndex: 'fullName'
  },
  {
    title: 'student Id',
    dataIndex: 'id',   
  },
  {
    title: 'email',
    dataIndex: 'email',   
  },
  {
    title: 'contact no',
    dataIndex: 'contactNo',   
  },
  
  {
    title: 'Action',
    key: 'x',
    render:(item)=>{    
      return <Space>
        <Link to={`/admin/students-data/${item.key}`}>
        <Button>details</Button>
        </Link>       
        <Button>update</Button>
        <Button>block</Button>
      </Space>
    } ,
    width:'1%', 
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
      return (<div> <h1>loading ---------------</h1> </div>)
    }
    return <div>
   <Table loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange}
   pagination={false} />
   <Pagination 
   current={page}
   onChange={(value)=>setPage(value)}
   pageSize={metaData?.limit}
    total={metaData?.total}/>
    </div>
}
export default StudentData ;
