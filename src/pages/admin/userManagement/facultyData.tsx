import { Button, Pagination, Space, Table, type TableColumnsType, type TableProps } from "antd";
import { useState } from "react";
import type { TFaculty, TQueryParams, } from "../../../types";

import { Link } from "react-router-dom";

import { useGetFacultyDataQuery } from "../../../redux/features/admin/userManagement.api"


export type TTableData=Pick<TFaculty,"fullName"|"id"|"email"|"contactNo">


const FacultyData=()=>{
   const [params,setParams]=useState<TQueryParams[]>([])
   const [page,setPage]=useState(1)
    const  {data:facultyData,isLoading,isFetching}=useGetFacultyDataQuery(
            [{ name:"limit",value:"3"},
            {name:"page",value:page},
            {name:"sort",value:'id'} ,...params] 
        )
console.log(facultyData)

   const tableData = facultyData?.data!.map(({_id,id, fullName, email, contactNo})=>({
     key:_id,
     id,
     fullName,
     email,
     contactNo
    }))

    const metaData=facultyData?.meta ;

    const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    dataIndex: 'fullName'
  },
  {
    title: 'Faculty Id',
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
        <Link to={`/admin/faculty-data/${item.key}`}>
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
        <h1> Faculty List </h1>
   <Table loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange}
   pagination={false} />
   <Pagination 
   current={page}
   onChange={(value)=>setPage(value)}
   pageSize={metaData?.limit}
    total={metaData?.total}/>
    
    </div>
}
export default FacultyData ;
