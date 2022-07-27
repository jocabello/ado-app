import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import { Layout, Menu, Row } from 'antd';
import { TeamOutlined, GoldOutlined, BuildOutlined, FileAddOutlined } from '@ant-design/icons';

import { EmployeeList } from '../employees/EmployeeList';
import { SitesList } from '../sites/SitesList';
import { CompaniesList } from '../companies/CompaniesList';
import { ContractsList } from '../contracts/ContractsList';

export const AppRouter = () => {
    const { Header, Footer, Sider, Content } = Layout;
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header>
                <div className="logo" />
                <Row justify="end">
                </Row>
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
                            <Link to="/companies">Empresas</Link>
                        </Menu.Item> 
                        <Menu.Item icon={<FileAddOutlined />} key="4">
                            <Link to="/contracts">Contratos</Link>
                        </Menu.Item> 
                    </Menu>
                </Sider>

                <Content style={{ padding: '0 24px 24px', margin: '16px 0' }}>
                    <div>
                        <Routes>
                            <Route path="/" element={<EmployeeList />} />
                            <Route path="/sites" element={<SitesList />} />
                            <Route path="/employees" element={<EmployeeList />} />
                            <Route path="/companies" element={<CompaniesList />} />
                            <Route path="/contracts" element={<ContractsList /> } />
                            {/* <Route path="invoices" element={<Invoices />} /> */}
                        </Routes>
                    </div>
                </Content>
            </Layout>
            <Footer></Footer>
        </Layout>
                    


    )
}
