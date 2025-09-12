import { Form, Select, } from "antd"
import { useEffect } from "react";
import { Controller, useFormContext, useWatch,  } from "react-hook-form";

type TPHSelect={
    label:string ;
    name:string ;
    options?:{value:string,label:string,disabled?:boolean}[];
    disabled?:boolean ;
    mode?:'multiple'| undefined ;
   
}

const PHSelectWithWatch=({label,name,options,disabled,mode,onChangeValue}:TPHSelect)=>{
    
    const {control}=useFormContext()

    const inputValue=useWatch({
         control,
         name,
    })

    useEffect(()=>{
        onChangeValue(inputValue)
    },[inputValue])
   
    return (
      
        <Controller
       name={name}
       render={({field, fieldState:{error}})=>(
         <Form.Item label={label}> 
    <Select
      mode={mode}
      defaultValue="select"
      disabled={disabled}
      style={{ width: "100%" }}
      {...field}
      options={options}
      size="large"
    />
    {error && <small style={{color:'red'}}>{error.message}</small>}
 </Form.Item>  
       )}
        />
 
    )
}
export default PHSelectWithWatch