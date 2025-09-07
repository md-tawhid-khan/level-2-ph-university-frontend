import { Form } from "antd"
import type { ReactNode } from "react"
import { FormProvider, useForm,  type FieldValues, type SubmitHandler } from "react-hook-form"

type TFormProps={
    onSubmit:SubmitHandler<FieldValues>,
    children:ReactNode

}

export const PHForm=({onSubmit,children }:TFormProps)=>{
    const methods=useForm()

    return (
  <FormProvider {...methods}>
    <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
    {children}
    </Form>
    </FormProvider>
    )
}