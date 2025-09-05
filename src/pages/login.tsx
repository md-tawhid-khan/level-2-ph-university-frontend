import { useForm, type SubmitHandler } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi"
import { useAppDispatch } from "../redux/hook"
import { setUser, type TUser } from "../redux/features/auth/authSlice"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

type Inputs = {
  id: string
  password: string
}

const Login=()=>{

    const dispatch=useAppDispatch()
    const navigate=useNavigate()

    const {
    register,
    handleSubmit,
     formState: { errors },
  } = useForm<Inputs>()

  const [login,{data,error,isLoading}]=useLoginMutation()

  if(isLoading){
    return <h1>loading -------------------</h1>
  }

//   console.log(data)
//   console.log(error)

   const onSubmit: SubmitHandler<Inputs> =async (data) => {

   const toastId= toast.loading("loading -------------")

    const userInfo={
        id:data.id ,
        password:data.password
    }
    try {
      const res = await login(userInfo).unwrap()

     const decode=jwtDecode(res.data.accessToken) as TUser
     
     dispatch(setUser({user:decode,token:res.data.accessToken})) 
     
     navigate(`/${decode.role}/dashboard`)
   
     toast.success("successful to log in",{id:toastId,duration:2000})
      
    } catch (error) {
     toast.error(" failed to login ",{id:toastId,duration:2000})
    }

     
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