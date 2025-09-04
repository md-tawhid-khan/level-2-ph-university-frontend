import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";

const { Header, Content, Footer} = Layout;


const MainLayout=()=>{
    return(
          <Layout style={{height:"100vh"}}>
         <Sidebar/>
      <Layout>
        <Header style={{ padding: 0, }}> </Header>
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