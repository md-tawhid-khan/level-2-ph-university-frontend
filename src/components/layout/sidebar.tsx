import { Layout, Menu } from "antd";
import { sideberItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routers/adminRouters";
import { FacultyPaths } from "../../routers/facultyRouters";
import { studentPaths } from "../../routers/studentRouters";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser, type TUser } from "../../redux/features/auth/authSlice";

const {  Sider } = Layout;

export const Sidebar=()=>{

   const userRole={
      ADMIN:"admin",
      FACULTY :"faculty",
      STUDENT:"student"
   }

   const {role}=useAppSelector(selectCurrentUser) as TUser
      

   let sidebarItems ;

   switch (role) {
      case userRole.ADMIN:
         sidebarItems=sideberItemsGenerator(adminPaths,userRole.ADMIN)
         break;
      case userRole.FACULTY:
         sidebarItems=sideberItemsGenerator(FacultyPaths,userRole.FACULTY)
         break;
      case userRole.STUDENT:
         sidebarItems=sideberItemsGenerator(studentPaths,userRole.STUDENT)
         break;
   
      default:
         break;
   }


   return <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{height:'100vh', position:'sticky', top:'0', left:'0'}}
      >
        <div style={{
          color:"white", 
          textAlign:"center",
          height:"4rem",
          display:"flex",
          justifyItems:"center",
          alignItems:"center",
          padding:"20px"
          }} >
          PH Uni
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
      </Sider>
}