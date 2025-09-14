import { Navigate } from "react-router-dom"
import type { ReactNode } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import {  logOut, selectCurrentToken} from "../../redux/features/auth/authSlice"
import { verifyToken } from "../../utils/verifyToken"

type TProtectedRoute={
    children:ReactNode,
    role?:string | undefined
}

export const ProtectedRoute=({children,role}:TProtectedRoute)=>{

 const token=useAppSelector(selectCurrentToken)
 const dispatch = useAppDispatch();

//  console.log(role)
 
 if(!token){
  return  <Navigate to="/login" replace={true}/>
 }

let user;

  if (token) {
    user = verifyToken(token);
  }

if (role !== undefined && role !== user?.role) {
    console.log("admin role")
    dispatch(logOut());
    return <Navigate to="/login" replace={true} />;
  }

    return children
}
