import { Table, type TableColumnsType, type TableProps } from "antd";
import { useGetAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import type { TAcademicSemesterData } from "../../../types/academicManagement.type";
import { useState } from "react";

export type TTableData=Pick<TAcademicSemesterData,"_id"|"name"|"year"|"startMonth"|"endMonth">


const AcademicSemester=()=>{
   const [params,setParams]=useState([])
    const  {data:semesterData}=useGetAcademicSemesterQuery(params)

    const paramsYear=new Date().getFullYear()
    

   const tableData = semesterData?.data?.map(({_id,startMonth,endMonth,year,name})=>({
      _id,name,startMonth,endMonth,year
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
        value: paramsYear,
      },
      {
        text: (paramsYear+1),
        value: (paramsYear+1),
      },
      {
        text: (paramsYear+2),
        value: (paramsYear+2),
      },
      {
        text:(paramsYear+3),
        value:(paramsYear+3),
      
      },
      {
        text: (paramsYear+4),
        value:(paramsYear+4),
      
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
]
// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];

const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
  if(extra.action==="filter"){
    const paramsQuery=[]
    filters.name?.forEach(item=>(
      paramsQuery.push({name:'name',value:item})
    ))
    filters.year?.forEach(item=>(
      paramsQuery.push({name:'year',value:item})
    ))

   setParams(paramsQuery)
  }
};

    
    return <div>
   <Table<TTableData> columns={columns} dataSource={tableData} onChange={onChange} />
    </div>
}
export default AcademicSemester ;
