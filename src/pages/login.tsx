import { useForm, type SubmitHandler } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi"

type Inputs = {
  id: string
  password: string
}

const Login=()=>{

    const {
    register,
    handleSubmit,
     formState: { errors },
  } = useForm<Inputs>()

  const [login,{data,error,isLoading}]=useLoginMutation()

  if(isLoading){
    return <h1>loading -------------------</h1>
  }

  console.log(data)
  console.log(error)

   const onSubmit: SubmitHandler<Inputs> = (data) => {

    const {id,password}=data ;
        login({
            id,password
        })
}

    return (
       
    <form onSubmit={handleSubmit(onSubmit)} >
       
       <label>user Id</label>

      <input  {...register("id")} />

      <label>password</label>

      <input {...register("password", { required: true })} />
     
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    
    </form>
    )
}

export default Login