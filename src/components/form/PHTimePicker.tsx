import { Form, TimePicker } from "antd"
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form"

type TTimePicker={
    name:string;
    label:string;
}

const PHTimePicker=({name,label}:TTimePicker)=>{
    const {control}=useFormContext()

    return (
        <div style={{marginBottom:'10px'}}>
            <Controller
            name={name}
            control={control}
            render={({field , fieldState:{error}})=>(
                <>
                <Form.Item label={label}>
                <TimePicker
                {...field}
                size="large"
                value={field.value ? dayjs(field.value, "HH:mm") : null}
                onChange={(time) => field.onChange(time ? time.format("HH:mm") : "")} 
                style={{width:'100%'}}
                format="HH:mm"
                />
                {error && <small style={{color:'red'}}>{error.message}</small> }
                </Form.Item>
                </>
            )}
            />
        </div>
    )
}

export default PHTimePicker