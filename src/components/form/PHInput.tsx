import { Input } from "antd"
import { Controller,} from "react-hook-form"

const PHInput=({type,name , label})=>{
    

    return <div>
        <Controller  
        name={name}
        render={({ field }) => (
            <>
         {label?label : null}
              <Input {...field} type={type} id={name}  />
              </>
        )}/>
                      
    </div>
}

export default PHInput