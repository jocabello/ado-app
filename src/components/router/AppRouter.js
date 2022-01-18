import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import { Layout, Menu } from 'antd';
import { TeamOutlined, GoldOutlined, BuildOutlined } from '@ant-design/icons';

import { EmployeeList } from '../employees/EmployeeList';
import { SitesList } from '../sites/SitesList';

export const AppRouter = () => {
    const { Header, Footer, Sider, Content } = Layout;
    
    return (
        <Layout>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">Iniciar sesión</Menu.Item>
                    <Menu.Item key="2">Registrarse</Menu.Item>
                    <Menu.Item key="3">Cerrar sesión</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item to="/trabajadores" icon={<TeamOutlined />} key="1">
                            <Link to="/employees">Trabajadores</Link>
                        </Menu.Item>
                        <Menu.Item to="/sites" icon={<GoldOutlined />} key="2">
                            <Link to="/sites">Obras</Link>
                        </Menu.Item>
                        <Menu.Item icon={<BuildOutlined />} key="3">
                            Empresa
                        </Menu.Item> 
                    </Menu>
                </Sider>

                <Content style={{ padding: '0 24px 24px' }}>
                    <div style={{ margin: '16px 0' }}>
                        <Routes >
                            <Route path="/" element={<EmployeeList />} />
                            <Route path="/sites" element={<SitesList />} />
                            <Route path="/employees" element={<EmployeeList />} />
                            {/* <Route path="invoices" element={<Invoices />} /> */}
                        </Routes>
                    </div>
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
                    


    )
}
