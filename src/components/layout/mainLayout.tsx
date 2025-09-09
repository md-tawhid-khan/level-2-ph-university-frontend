import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { useAppDispatch } from "../../redux/hook";
import { logOut } from "../../redux/features/auth/authSlice";

const { Header, Content} = Layout;



const MainLayout=()=>{
  const dispatch=useAppDispatch()

  const handleLogOut=()=>{
      dispatch(logOut())
}

  
    return(
          <Layout style={{height:"100%"}}>
         <Sidebar/>
      <Layout>
        <Header style={{ padding: 0, }}> 
          <Button onClick={handleLogOut}>LogOut</Button> </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
             
            }}
          >
            <h1><Outlet/></h1>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout