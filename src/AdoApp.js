import React from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';
import { TeamOutlined, GoldOutlined, BuildOutlined } from '@ant-design/icons';
import { EmployeeList } from './components/employees/EmployeeList';


export const AdoApp = () => {
    
    const { Header, Content, Sider } = Layout;

    return (
        <Layout>
            <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Header>
            <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item icon={<TeamOutlined />} key="1">Trabajadores</Menu.Item>
                    <Menu.Item icon={<GoldOutlined />} key="2">Obras</Menu.Item>
                    <Menu.Item icon={<BuildOutlined />} key="3">Empresa</Menu.Item> 
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                    <EmployeeList />                
                </Content>
            </Layout>
            </Layout>
        </Layout>
    )
}
