import React, {FC} from 'react';
import {Card, Layout, Row} from "antd";
import {LoginForm} from "../components/LoginForm";

export const Login:FC = () => {
    return (
        <Layout>
            <div style={{ position: 'absolute' }}>Username: user, Password: 123</div>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <LoginForm />
                </Card>
            </Row>
        </Layout>
    );
};
