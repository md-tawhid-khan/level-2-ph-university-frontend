import { Table, type TableColumnsType, type TableProps } from "antd";
import { useGetAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import type { TAcademicSemesterData } from "../../../types/academicManagement.type";

export type TTableData=Pick<TAcademicSemesterData,"_id"|"name"|"year"|"startMonth"|"endMonth">


const AcademicSemester=()=>{

    const  {data:semesterData}=useGetAcademicSemesterQuery(undefined)

    // console.log(semesterData)

   const tableData = semesterData?.data?.map(({_id,startMonth,endMonth,year,name})=>({
      _id,name,startMonth,endMonth,year
    }))

    const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Category 1',
        value: 'Category 1',
      },
      {
        text: 'Category 2',
        value: 'Category 2',
      
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
  console.log('params', pagination, filters, sorter, extra);
};

    
    return <div>
   <Table<TTableData> columns={columns} dataSource={tableData} onChange={onChange} />
    </div>
}
export default AcademicSemester ;
