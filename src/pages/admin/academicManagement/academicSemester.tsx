import { Button, Table, type TableColumnsType, type TableProps } from "antd";
import { useGetAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import type { TAcademicSemesterData } from "../../../types/academicManagement.type";
import { useState } from "react";
import type { TQueryParams } from "../../../types";

export type TTableData=Pick<TAcademicSemesterData,"name"|"year"|"startMonth"|"endMonth">


const AcademicSemester=()=>{
   const [params,setParams]=useState<TQueryParams[]>([])
    const  {data:semesterData,isLoading,isFetching}=useGetAcademicSemesterQuery(params)

    const paramsYear=new Date().getFullYear()
    

   const tableData = semesterData?.data?.map(({_id,startMonth,endMonth,year,name})=>({
     key:_id,
     name,
     startMonth,
     endMonth,
     year
    }))

    const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Autumn',
        value: 'autumn',
      },
      {
        text: 'Fall',
        value: 'fall',
      },
      {
        text: 'Summer',
        value: 'summer',
      
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value as string),
    width: '30%',
  },
  {
    title: 'Year',
    dataIndex: 'year',
     filters: [
      {
        text: paramsYear,
        value: (paramsYear).toString(),
      },
      {
        text: (paramsYear+1),
        value: (paramsYear+1).toString(),
      },
      {
        text: (paramsYear+2),
        value: (paramsYear+2).toString(),
      },
      {
        text:(paramsYear+3),
        value:(paramsYear+3).toString(),
      
      },
      {
        text: (paramsYear+4),
        value:(paramsYear+4).toString(),
      
      },
    ],
  },
  {
    title: 'Start Month',
    dataIndex: 'startMonth',
    
  },
  {
    title: 'End Month',
    dataIndex: 'endMonth',    
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
export default AcademicSemester ;
