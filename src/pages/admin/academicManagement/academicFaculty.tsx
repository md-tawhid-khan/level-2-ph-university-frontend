import { Button, Table, type TableColumnsType, type TableProps } from "antd";
import { useGetAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { useState } from "react";
import type { TQueryParams } from "../../../types";


interface DataType {

  name: string;

}

const AcademicFaculty=()=>{

    const [params,setParams]=useState<TQueryParams[]>([])

    const {data:facultyData,isFetching, isLoading}=useGetAcademicFacultyQuery(params)

    
    const tableData=facultyData?.data!.map(({_id,name}:{_id:string,name:string})=>({
        key:_id,
        name,
    })) 

    const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: { target: 'full-header' },
    filters:tableData?.map(data=>({
        text:data.name,
        value:data.name
    })) ,
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value as string),
    width: '30%',
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    render:()=>{
        return <div>
            <Button>Delete</Button>
        </div>
    }
  }
  
];


const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
if(extra.action==="filter"){
    const paramsQuery:TQueryParams[]=[]
    filters.name?.forEach(item=>(
      paramsQuery.push({name:'name',value:item})
    ))
   setParams(paramsQuery) 
  }
}

 if(isLoading){
      return (<div> <h1>loading ---------------</h1> </div>)
    }

 return (
     <Table
     loading={isFetching}
    columns={columns}
    dataSource={tableData}
    onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
 )
}

export default AcademicFaculty