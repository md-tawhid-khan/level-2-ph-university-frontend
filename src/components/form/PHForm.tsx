import { FormProvider, useForm } from "react-hook-form"

export const PHForm=({onSubmit,children })=>{
    const methods=useForm()

    return (
  <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>
    {children}
    </form>
    </FormProvider>
    )
}