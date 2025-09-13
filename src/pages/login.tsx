import {  type FieldValues, type SubmitHandler } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi"
import { useAppDispatch } from "../redux/hook"
import { setUser, type TUser } from "../redux/features/auth/authSlice"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { PHForm } from "../components/form/PHForm"
import PHInput from "../components/form/PHInput"
import { Row } from "antd"



const Login=()=>{

    const dispatch=useAppDispatch()
    const navigate=useNavigate()


  const [login,{isLoading}]=useLoginMutation()

  if(isLoading){
    return <h1>loading -------------------</h1>
  }

  
//   console.log(data)
//   console.log(error)

   const onSubmit: SubmitHandler<FieldValues> =async (data) => {
    
   const toastId= toast.loading("loading -------------")

    const userInfo={
        id:data.id ,
        password:data.password
    }
    try {
      const res = await login(userInfo).unwrap()

    

     const decode=jwtDecode(res.data.accessToken) as TUser
     
     dispatch(setUser({user:decode,token:res.data.accessToken})) 

       if(res.data.needsPasswordChanges){
         navigate('/change-password')
      } else {
            navigate(`/${decode.role}/dashboard`)
      }
     
     toast.success("successful to log in",{id:toastId,duration:2000})
      
    } catch (error) {
     toast.error(" failed to login ",{id:toastId,duration:2000})
    //  console.log(error)
    }

     
}

    return (
      <Row justify="center" align="middle" style={{height:'100vh'}} >
    <PHForm onSubmit={onSubmit} >
       
      <PHInput type="text" name="id" label="User Id : "></PHInput>

      <PHInput type="text" name="password" label="password : "/>
     
      <input type="submit" />
    
    </PHForm>

    </Row> 
    )
}

export default Login