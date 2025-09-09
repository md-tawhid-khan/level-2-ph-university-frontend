import { Button, Col, Divider, Row } from "antd";
import { PHForm } from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import {  type FieldValues, type SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { genderOptions } from "../../../constantTs/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAcademicDepartmentQuery, useGetAcademicFacultyQuery, useGetAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement.api";


const studentDummyData={
  "password":"student12345",
  "student":{
"name":{  
"firstName":"Muhammad",
"middleName":"Tawhid",
"lastName":"khan",
},
"gender":"male",
"dateOfBirth":"1998-10-07",
"guardian":{
  "name": "sojib",
  "relationWithStudent": "brother",
  "ocupation": "student",
  "contactNo": "017397938475948769"
},
"localGuardian":{
  "name": "sojib",
  "relationWithStudent": "brother",
  "ocupation": "student",
  "contactNo": "017397938475948769"
},

"email":"tawhidkhan19982@gmail.com",
"contactNo":"01738269414",
"emergencyContactNo": "o1960204151",
"presentAddress":"mithapukur, rangpur",
"permanentAddress":"mithapukur, rangpur",

"academicDepartment":"68ade4960b59fbf8871cf5d0",
"admissionSemester":"68ade7409797f505fd8b3d1c",
"isDelete":false
  }
  }

const CreateStudent =()=>{
   
 
  const {data:semesterData,isLoading:SLoading}=useGetAcademicSemesterQuery(undefined)
 
  const {data:facultyData,isLoading:Floading}=useGetAcademicFacultyQuery(undefined)

    const facultyOptions=facultyData?.data!.map(item=>({
      label:item.name,
      value:item._id
    }))

    

  const {data:academicDepartment,isLoading:DLoading}=useGetAcademicDepartmentQuery(undefined,{skip:Floading})
   
 
 console.log({academicDepartment})

  const departmentOptions=academicDepartment?.data!.map(item=>({
    label:item.name,
    value:item._id,
  }))

  

  const semesterOptions=semesterData?.data!.map(item=>({
    label:`${item.name} ${item.year}`,
    value:item._id
  }))

  
  const onSubmit:SubmitHandler<FieldValues>=(data)=>{

      const formData=new FormData()
           formData.append('data',JSON.stringify(data))

           //! this is development
           // just for checking
       console.log(Object.fromEntries(formData))
  }


 return <div>
   <PHForm onSubmit={onSubmit} >
    <Divider> Personal information </Divider>
    <Row gutter={8}>
      <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="name.firstName" label="first name"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="name.middleName" label="middle name"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="name.lastName" label="last name"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHSelect label="Gender" name="gender" options={genderOptions} ></PHSelect>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHDatePicker  name="dateOfBirth" label="dateOfBirth"></PHDatePicker>
    </Col>
    </Row>

    <Divider> contact information </Divider>
    <Row gutter={8}>
      <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="email" label="email"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="contactNo" label="contact"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="emergencyContactNo" label="emergencyContactNo"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="presentAddress" label="presentAddress"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="permanentAddress" label="permanentAddress"></PHInput>
    </Col>
    </Row>

    <Divider> guardian information </Divider>
    <Row gutter={8}>
      <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="guardian.name" label="name"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="guardian.relationWithStudent" label="relationWithStudent"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="guardian.ocupation" label="ocupation"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="guardian.contactNo" label="contactNo"></PHInput>
    </Col>

    </Row>

    <Divider> local guardian information </Divider>
    <Row gutter={8}>
      <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="localGuardian.name" label="name"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="localGuardian.relationWithStudent" label="relationWithStudent"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="localGuardian.ocupation" label="ocupation"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="localGuardian.contactNo" label="contactNo"></PHInput>
    </Col>

    </Row>

    <Divider>  academic information </Divider>
    <Row gutter={8}>
      <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHSelect  name="academicFaculty" label="academicFaculty" options={facultyOptions}></PHSelect>
    </Col>
      <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHSelect  name="academicDepartment"
     label="academicDepartment"
     disabled={DLoading}
     options={departmentOptions}></PHSelect>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHSelect 
     name="admissionSemester" 
     disabled={SLoading} 
     label="admissionSemester" 
     options={semesterOptions}></PHSelect>
    </Col>
    </Row>
    <Button htmlType="submit">submit</Button>
   </PHForm>
   </div>
 
}

export default CreateStudent ;