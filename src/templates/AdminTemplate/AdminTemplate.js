
import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import AD_Header from '../../components/Admin/AD_Header';
import AD_Sider from '../../components/Admin/AD_Sider';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default function AdminTemplate(props) {
    const { Component, ...restProps } = props;
    const state = {
        collapsed: false,
    };

    const toggle = () => {
        state({
            collapsed: !state.collapsed,
        });
    };


    return <Route {...restProps} render={(propsRoute) => {
        return <Layout>
            <AD_Header />
            <Layout>
                <AD_Sider />
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
                        <Component {...propsRoute} />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    }}
    />



}
