import { Layout, Menu } from "antd";
import type { MenuProps } from 'antd';
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;


const items:MenuProps["items"]= [
    {
        key:"0001",
        label:"Dashboard"
    },
    {
        key:"0002",
        label:"profile",
        children:[
          {
            key:"00021",
          label:"add profile"
        },
          {
            key:"00021",
          label:"get profile"
        }
        ]
    },
    {
        key:"0003",
        label:"userManagement",
        children:[
            {
                key:"00001",
                label:"create Admin"
            },
            {
                key:"00002",
                label:"create Student"
            }
        ]
    }
];

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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
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