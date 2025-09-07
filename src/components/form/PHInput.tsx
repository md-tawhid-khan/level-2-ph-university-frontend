import { Input } from "antd"
import { Controller,} from "react-hook-form"

type TInputesType={
    type:string,
    name:string,
    label?:string
}

const PHInput=({type,name , label}:TInputesType)=>{
    

    return <div style={{marginBottom:'20px'}}>
        {label?label : null}
        <Controller  
        name={name}
        render={({ field }) => (
            <div style={{marginTop:'5px'}}>
            <Input {...field} type={type} id={name}  />
              </div>
        )}/>
                      
    </div>
}

export default PHInput