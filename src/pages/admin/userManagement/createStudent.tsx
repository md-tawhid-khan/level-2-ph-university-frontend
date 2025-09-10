import { Button, Col, Divider, Form, Input, Row } from "antd";
import { PHForm } from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Controller, type FieldValues, type SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { genderOptions } from "../../../constantTs/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import {
  useGetAcademicDepartmentQuery,
  useGetAcademicSemesterQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentUserMutation } from "../../../redux/features/admin/userManagement.api";


const CreateStudent = () => {
  const { data: semesterData, isLoading: SLoading } =
    useGetAcademicSemesterQuery(undefined);
  const { data: academicDepartment, isLoading: DLoading } =
    useGetAcademicDepartmentQuery(undefined, { skip: SLoading });

  const [addStudent,{isLoading}] = useAddStudentUserMutation();

  const departmentOptions = academicDepartment?.data!.map((item) => ({
    label: item.name,
    value: item._id,
  }));

  const semesterOptions = semesterData?.data!.map((item) => ({
    label: `${item.name} ${item.year}`,
    value: item._id,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const studentData = {
      password: "student12345",
      student: data,
    };

     console.log({studentData}) 

    const formData = new FormData();
    formData?.append("data", JSON.stringify(studentData));
    formData?.append('file',data.profileImage)
    
    const res = await addStudent(formData);
    console.log({ res });

    //! this is development
    // just for checking
    //  console.log(Object.fromEntries(formData))
  };
 
  if(isLoading){
    return (<div>
      <h1>loading ------------------</h1>
    </div>)
  }

  return (
    <div>
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

        <Divider> guardian information </Divider>
        <Row gutter={8}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput type="text" name="guardian.name" label="name"></PHInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput
              type="text"
              name="guardian.relationWithStudent"
              label="relationWithStudent"
            ></PHInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput
              type="text"
              name="guardian.ocupation"
              label="ocupation"
            ></PHInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput
              type="text"
              name="guardian.contactNo"
              label="contactNo"
            ></PHInput>
          </Col>
        </Row>

        <Divider> local guardian information </Divider>
        <Row gutter={8}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput
              type="text"
              name="localGuardian.name"
              label="name"
            ></PHInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput
              type="text"
              name="localGuardian.relationWithStudent"
              label="relationWithStudent"
            ></PHInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput
              type="text"
              name="localGuardian.ocupation"
              label="ocupation"
            ></PHInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput
              type="text"
              name="localGuardian.contactNo"
              label="contactNo"
            ></PHInput>
          </Col>
        </Row>

        <Divider> academic information </Divider>
        <Row gutter={8}>
          
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHSelect
              name="academicDepartment"
              label="academicDepartment"
              disabled={DLoading}
              options={departmentOptions}
            ></PHSelect>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHSelect
              name="admissionSemester"
              disabled={SLoading}
              label="admissionSemester"
              options={semesterOptions}
            ></PHSelect>
          </Col>
        </Row>
        <Button htmlType="submit">submit</Button>
      </PHForm>
    </div>
  );
};

export default CreateStudent;
