import { Form, Input } from "antd"
import { Controller,} from "react-hook-form"

type TInputesType={
    type:string,
    name:string,
    label?:string
    disabled?:boolean
}

const PHInput=({type,name , label,disabled}:TInputesType)=>{
    

    return <div style={{marginBottom:'20px'}}>
        
        <Controller  
        name={name}
        render={({ field }) => (
            <Form.Item label={label} >
            <Input {...field} disabled={disabled} type={type} id={name} size="large" />
             </Form.Item>
        )}/>
                      
    </div>
}

export default PHInput