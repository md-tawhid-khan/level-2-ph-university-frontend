
import { PHForm } from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import type { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { useChangeUserPasswordMutation } from "../redux/features/admin/userManagement.api";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import { logOut } from "../redux/features/auth/authSlice";
import { toast } from "sonner";
import { Row } from "antd";


const ChangePassword=()=>{
     const navigation=useNavigate()

    const [changePassword,{isLoading}]=useChangeUserPasswordMutation()
    const dispatch=useAppDispatch()

    const onSubmit:SubmitErrorHandler<FieldValues>=async(data)=>{
        // console.log(data)
      try {
         const res=await changePassword(data)
        //  console.log({res})
         if(res.data.success){
             dispatch(logOut())
             navigation('/login')
         }else{
            toast.error("failed to change password , try again")
         }
      } catch (error) {
         console.log(error)
      }
    }

    if(isLoading){
        return (<div>
            <h1>loading -------------</h1>
        </div>)
    }

    return (
       <Row justify="center" align="middle" style={{height:'100vh'}} >
    <PHForm onSubmit={onSubmit} >
       
      <PHInput type="text" name="oldPassword" label="old password : "></PHInput>

      <PHInput type="text" name="newPassword" label="new password : "/>
     
      <input type="submit" />
    
    </PHForm>

    </Row>
    )
}

export default ChangePassword ;