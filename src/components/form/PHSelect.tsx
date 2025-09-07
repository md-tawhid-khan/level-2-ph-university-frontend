import { Form, Select, } from "antd"
import { Controller } from "react-hook-form";

type TPHSelect={
    label:string ;
    name:string ;
    options?:{value:string,label:string,disabled?:boolean}[]

}

const PHSelect=({label,name,options}:TPHSelect)=>{
      
 
    return (
      
        <Controller
       name={name}
       render={({field})=>(
         <Form.Item label={label}> 
    <Select
      defaultValue="select semester"
      style={{ width: "100%" }}
      {...field}
      options={options}
      size="large"
    />
 </Form.Item>  
       )}
        />
        
     

    )
}
export default PHSelect