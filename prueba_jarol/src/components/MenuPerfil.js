import React from 'react';
import ContentRow from "./ContentRow";
import { Layout, Menu } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined, LogoutOutlined  } from "@ant-design/icons";
import App from '../App';
const { Header, Content, Footer, Sider } = Layout;

export default function MenuPerfil({usernm}){
    const reload = () =>{
        window.location.reload();
    }
    return (
        <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              {usernm}
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Videos/Imágenes
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Subir
            </Menu.Item>
            <Menu.Item key="4" onClick={reload} icon={<LogoutOutlined /> }>
              Salir
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content>
          <ContentRow nm = {usernm}/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer de la página</Footer>
        </Layout>
      </Layout>
    )
}
