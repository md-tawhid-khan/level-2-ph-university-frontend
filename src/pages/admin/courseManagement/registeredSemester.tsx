import { Button, Dropdown, Table, Tag, type MenuProps, type TableColumnsType, type TableProps } from "antd";
import { useState } from "react";
import type { TQueryParams, TRegisteredSemester } from "../../../types";
import { useGetRegisteredSemesterDataQuery, useUpdateSemesterRegistrationMutation } from "../../../redux/features/admin/courseManagement.api";
import moment from "moment";


export type TTableData=Pick<TRegisteredSemester,"name"|"status"|"startDate"|"endDate">


const items: MenuProps['items'] = [
  {
    label: 'UPCOMING',
    key: 'UPCOMING',
    
  },
  {
    label: 'ONGOING',
    key: 'ONGOING',
    
  },
  {
    label: 'ENDED',
    key: 'ENDED',

  },
  
];

const RegisteredSemester=()=>{
    const [registeredId,setRegisteredId]=useState('')

   const [params,setParams]=useState<TQueryParams[]>([]) ;

    const  {data:semesterData,isLoading,isFetching}=useGetRegisteredSemesterDataQuery(params)
    const [updateRegistrationStatus,{isLoading:ULoading}]=useUpdateSemesterRegistrationMutation()

//     const paramsYear=new Date().getFullYear()
    

   const tableData = semesterData?.data?.map(({_id,startDate,endDate,status,academicSemester})=>({
     key:_id,
     name:`${academicSemester.name} ${academicSemester.year}`,
     startDate:moment(new Date(startDate)).format('MMMM') ,
     endDate:moment(new Date(endDate)).format('MMMM'),
     status:status,
    }))

const handleStatusDropdown=async(data)=>{
   
    const updateData={
        id:registeredId,
        data:{ status :data.key}
    }
    const res=await updateRegistrationStatus(updateData)
    console.log({res})
}

    const menuProps = {
  items,
  onClick: handleStatusDropdown,
};

    const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    dataIndex: 'name',
    
  },
  {
    title: 'status',
    dataIndex: 'status',
    render:(item)=>{
        let color ;
        if(item==='UPCOMING'){
           color='blue' ;
        }
        if(item==='ONGOING'){
              color='green' ;
        }
        if(item==='END'){
              color='red' ;
        }
        return <Tag color={color}>{item}</Tag>
    }
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
    render:(item)=>{
      return <div>
        <Dropdown menu={menuProps} trigger={['click']} >
        <Button onClick={()=>setRegisteredId(item.key)}>update</Button>
        </Dropdown>
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

    if(isLoading || ULoading ){
      return ( <div> <h1>loading ---------------</h1> </div>)
    }
    return <div>
   <Table loading={isFetching} 
   columns={columns} 
   dataSource={tableData} 
   onChange={onChange} />
    </div>
}
export default RegisteredSemester ;
