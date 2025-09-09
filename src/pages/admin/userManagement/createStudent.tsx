import { Button } from "antd";
import { PHForm } from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import type { FieldValues, SubmitHandler } from "react-hook-form";

const studentDummyData={
  "password":"student12345",
  "student":{
"name":{  
"firstName":"Muhammad",
"middleName":"Tawhid",
"lastName":"khan"
},
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
"gender":"male",
"dateOfBirth":"1998-10-07",
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
      //  console.log(data)

      const formData=new FormData()
           formData.append('data',JSON.stringify(data))

           //! this is development
           // just for checking
       console.log(Object.fromEntries(formData))
  }

 return <div>
   <PHForm onSubmit={onSubmit}>
    <PHInput type="text" name="name" label="text"></PHInput>
    <Button htmlType="submit">submit</Button>
   </PHForm>
   </div>
 
}

export default CreateStudent ;