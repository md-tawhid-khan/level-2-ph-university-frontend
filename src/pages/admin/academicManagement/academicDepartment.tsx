
import { Button, Table, type TableColumnsType, type TableProps } from "antd"
import { useGetAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement.api"
import type { TQueryParams } from "../../../types";
import { useState } from "react";
import type { TAcademicDepartment,  } from "../../../types/academicManagement.type";

interface DataType {
  key: React.Key;
  name: string;
  academicFaculty:string ;
}



const AcademicDepartment=()=>{
    const [params,setParams]=useState<TQueryParams[]>([])

    const {data:AcademicDepartmentData,isFetching,isLoading}=useGetAcademicDepartmentQuery(params)
    
    // console.log(AcademicDepartmentData)

    const tableData=AcademicDepartmentData?.data!.map(({_id,name, academicFaculty}:TAcademicDepartment)=>({
        key:_id,
        name,
        academicFaculty:academicFaculty.name
    })) 

    

     const columns: TableColumnsType<DataType> = [
      {
        title: 'Name',
        dataIndex: 'name',
        showSorterTooltip: { target: 'full-header' },
      },
      {
        title:"academicFaculty",
        dataIndex:'academicFaculty',
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
        <Table<DataType> 
     loading={isFetching}
    columns={columns}
    dataSource={tableData}
    onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
    )
}
export default AcademicDepartment