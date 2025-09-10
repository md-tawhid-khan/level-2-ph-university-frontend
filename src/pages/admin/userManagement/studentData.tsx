import { Button, Space, Table, type TableColumnsType, type TableProps } from "antd";
import { useState } from "react";
import type { TQueryParams, TStudent } from "../../../types";
import { useGetStudentDataQuery } from "../../../redux/features/admin/userManagement.api";

export type TTableData=Pick<TStudent,"fullName"|"id">


const StudentData=()=>{
   const [params,setParams]=useState<TQueryParams[]>([])
    const  {data:studentData,isLoading,isFetching}=useGetStudentDataQuery(params)

   const tableData = studentData?.data!.map(({_id,id,fullName})=>({
     key:_id,
     id,
     fullName
    }))

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
    title: 'Action',
    key: 'x',
    render:()=>{
      return <Space>
        <Button>details</Button>
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
   <Table loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange} />
    </div>
}
export default StudentData ;
