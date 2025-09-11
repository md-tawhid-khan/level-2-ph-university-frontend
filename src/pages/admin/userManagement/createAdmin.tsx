import { Button, Col, Divider, Form, Input, Row } from "antd"
import { PHForm } from "../../../components/form/PHForm"
import PHInput from "../../../components/form/PHInput"
import PHSelect from "../../../components/form/PHSelect"
import { Controller, type FieldValues, type SubmitHandler } from "react-hook-form"
import PHDatePicker from "../../../components/form/PHDatePicker"
import { genderOptions } from "../../../constantTs/global"
import { useGetAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement.api"
import { useAddAdminUserMutation } from "../../../redux/features/admin/userManagement.api"


const admin={
  "password":"admin12345",
  "admin":{
"name":{  
"firstName":"Muhammad5",
"middleName":"Tawhid",
"lastName":"khan"
},
"gender":"male",
"dateOfBirth":"1998-10-07",
"email":"tawhidkhan191916@gmail.com",
"contactNo":"01738269414",
"emergencyContactNo": "o1960204151",
"presentAddress":"mithapukur, rangpur",
"permanentAddress":"mithapukur, rangpur",
"designation":"Software Enginner",
"managementDepartment":"68ade4500b59fbf8871cf5cd",
"isDelete":false
  }
  }

const CreateAdmin=()=>{

    const [addAdmin,{isLoading}]=useAddAdminUserMutation()

    const { data: academicDepartment, isLoading:Dloading } =
            useGetAcademicDepartmentQuery(undefined);
          
    
            const departmentOptions = academicDepartment?.data!.map((item) => ({
        label: item.name,
        value: item._id,
      }));

    const onSubmit:SubmitHandler<FieldValues>=async(data)=>{
         const adminData={
            password:'admin12345',
            admin:data
         }
         console.log({adminData})
         const formData=new FormData()
         formData.append('data',JSON.stringify(adminData))
         formData.append('file',data.profileImage)

         const res=await addAdmin(formData)
         console.log({res})
    }
  
    if(isLoading){
        return (<div>
            <h1>loading -------------</h1>
        </div>)
    }

    return <div>
        <PHForm onSubmit={onSubmit}>
                    <Divider> Personal information </Divider>
                    <Row gutter={8}>
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <PHInput
                          type="text"
                          name="name.firstName"
                          label="first name"
                        ></PHInput>
                      </Col>
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <PHInput
                          type="text"
                          name="name.middleName"
                          label="middle name"
                        ></PHInput>
                      </Col>
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <PHInput
                          type="text"
                          name="name.lastName"
                          label="last name"
                        ></PHInput>
                      </Col>
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <PHSelect
                          label="Gender"
                          name="gender"
                          options={genderOptions}
                        ></PHSelect>
                      </Col>
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Controller
                        name="profileImage"
                        render={({field:{onChange,value,...field}})=>(
                          <Form.Item label='picture'>
                          <Input type="file"
                          {...field}
                         value={value?.fileName}
                          onChange={(e)=>{onChange(e.target.files?.[0])}} />
                          </Form.Item>
                        )}
                        />
                      </Col>
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <PHDatePicker name="dateOfBirth" label="dateOfBirth"></PHDatePicker>
                      </Col>
                    </Row>
            
                    <Divider> contact information </Divider>
                    <Row gutter={8}>
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <PHInput type="text" name="email" label="email"></PHInput>
                      </Col>
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <PHInput type="text" name="contactNo" label="contact"></PHInput>
                      </Col>
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <PHInput
                          type="text"
                          name="emergencyContactNo"
                          label="emergencyContactNo"
                        ></PHInput>
                      </Col>
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <PHInput
                          type="text"
                          name="designation"
                          label="designation"
                        ></PHInput>
                      </Col>
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <PHInput
                          type="text"
                          name="presentAddress"
                          label="presentAddress"
                        ></PHInput>
                      </Col>
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <PHInput
                          type="text"
                          name="permanentAddress"
                          label="permanentAddress"
                        ></PHInput>
                      </Col>
                    </Row>
            
                    <Divider> academic information </Divider>
                    <Row gutter={8}>
                      
                      <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <PHSelect
                          name="managementDepartment"
                          label="managementDepartment"
                          disabled={Dloading}
                          options={departmentOptions}
                        ></PHSelect>
                      </Col>
                     
                    </Row>
                    <Button htmlType="submit">submit</Button>
                  </PHForm>
    </div>
}
export default CreateAdmin