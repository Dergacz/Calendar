import React from 'react';
import {Layout, Menu, MenuProps, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../routes/routes";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {logout} from "../store/reducers/auth/action-creators";

export const Navbar = () => {
    const dispatch = useAppDispatch();
    const router = useHistory();
    const { isAuth } = useAppSelector(state => state.authSlice);
    const exitItem: MenuProps['items'] = [
        {
            onClick: () => dispatch(logout()),
            key: 1,
            label: 'Exit'
        }
    ];

    const loginItem: MenuProps['items'] = [
        {
            onClick: () => router.push(RouteNames.LOGIN),
            key: 1,
            label: 'Login'
        }
    ];
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth ? (
                        <>
                            <div style={{color: 'white'}}>User name</div>
                            <Menu theme="dark" mode="horizontal" selectable={false} items={exitItem} />
                        </>
                    ) : (
                        <Menu theme="dark" mode="horizontal" selectable={false} items={loginItem} />
                    )
                }
            </Row>
        </Layout.Header>
    );
};
