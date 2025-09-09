import { Button, Col, Divider, Row } from "antd";
import { PHForm } from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import type { FieldValues, SubmitHandler } from "react-hook-form";

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

 

  const onSubmit:SubmitHandler<FieldValues>=(data)=>{
       console.log(data)

      // const formData=new FormData()
      //      formData.append('data',JSON.stringify(data))

           //! this is development
           // just for checking
      //  console.log(Object.fromEntries(formData))
  }

 return <div>
   <PHForm onSubmit={onSubmit}>
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
    <PHInput type="text" name="gender" label="gender"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="dateOfBirth" label="dateOfBirth"></PHInput>
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
    <PHInput type="text" name="academicFaculty" label="academicFaculty"></PHInput>
    </Col>
      <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="academicDepartment" label="academicDepartment"></PHInput>
    </Col>
    <Col span={24} md={{span:12}} lg={{span:8}}>
    <PHInput type="text" name="admissionSemester" label="admissionSemester"></PHInput>
    </Col>
    </Row>
    <Button htmlType="submit">submit</Button>
   </PHForm>
   </div>
 
}

export default CreateStudent ;