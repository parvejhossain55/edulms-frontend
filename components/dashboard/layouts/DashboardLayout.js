import React from 'react';
import {Layout, Button} from "antd";
import SideMenuBar from "./SideMenuBar";
import DashboardHeader from "./DashboardHeader";
const {Content} = Layout;
const DashboardLayout = ({children}) => {
    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <SideMenuBar />

                <Layout className="site-layout">
                    {/*<DashboardHeader/>*/}
                    <Content
                        /*style={{
                            margin: '20px',
                            // background: colorBgContainer,
                            padding: "20px",
                        }}*/

                    >

                        {children}
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default DashboardLayout;