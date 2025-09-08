/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd"
import type { ReactNode } from "react"
import { FormProvider, useForm,  type FieldValues,  type SubmitHandler, type UseFormProps } from "react-hook-form"

export type TFormConfig={
  resolver?:any
}

type TFormProps ={
    onSubmit:SubmitHandler<FieldValues>,
    children:ReactNode,
} & TFormConfig

export const PHForm=({onSubmit,children,resolver}:TFormProps)=>{
   const formConfig:UseFormProps<FieldValues>={}

   if(resolver){
       formConfig['resolver']=resolver ;
   }
     
    const methods=useForm(formConfig)

    return (
  <FormProvider {...methods}>
    <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
    {children}
    </Form>
    </FormProvider>
    )
}