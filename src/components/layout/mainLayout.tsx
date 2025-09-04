import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { adminPaths} from "../../routers/adminRouters";
import { sideberItemsGenerator } from "../../utils/sidebarItemsGenerator";

const { Header, Content, Footer, Sider } = Layout;




const MainLayout=()=>{
    return(
          <Layout style={{height:"100vh"}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sideberItemsGenerator(adminPaths)} />
      </Sider>
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
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MainLayout