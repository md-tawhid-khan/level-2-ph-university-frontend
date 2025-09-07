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
    <form onSubmit={methods.handleSubmit(onSubmit)}>
    {children}
    </form>
    </FormProvider>
    )
}