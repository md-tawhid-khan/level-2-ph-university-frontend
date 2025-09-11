import { Button, Table, type TableColumnsType, type TableProps } from "antd";
import { useState } from "react";
import type { TQueryParams, TRegisteredSemester } from "../../../types";
import { useGetRegisteredSemesterDataQuery } from "../../../redux/features/admin/courseManagement.api";
import moment from "moment";

export type TTableData=Pick<TRegisteredSemester,"name"|"status"|"startDate"|"endDate">


const RegisteredSemester=()=>{

   const [params,setParams]=useState<TQueryParams[]>([])
    const  {data:semesterData,isLoading,isFetching}=useGetRegisteredSemesterDataQuery(params)

//     const paramsYear=new Date().getFullYear()
    

   const tableData = semesterData?.data?.map(({_id,startDate,endDate,status,academicSemester})=>({
     key:_id,
     name:academicSemester.name,
     startDate:moment(new Date(startDate)).format('MMMM') ,
     endDate:moment(new Date(endDate)).format('MMMM'),
     status:status,
    }))

    const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    dataIndex: 'name',
    
  },
  {
    title: 'status',
    dataIndex: 'status',
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',    
  },
  {
    title: 'Action',
    key: 'x',
    render:()=>{
      return <div>
        <Button>update</Button>
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
      return (<div> <h1>loading ---------------</h1> </div>)
    }
    return <div>
   <Table loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange} />
    </div>
}
export default RegisteredSemester ;
