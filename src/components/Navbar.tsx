import React from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../routes/routes";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {logout} from "../store/reducers/auth/action-creators";

export const Navbar = () => {
    const dispatch = useAppDispatch();
    const router = useHistory();
    const { isAuth } = useAppSelector(state => state.authSlice);
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth ? (
                        <>
                            <div style={{color: 'white'}}>User name</div>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item
                                    key={1}
                                    onClick={() => dispatch(logout())}
                                >
                                    Exit
                                </Menu.Item>
                            </Menu>
                        </>
                    ) : (
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                key={1}
                                onClick={() => router.push(RouteNames.LOGIN)}
                            >
                                Login
                            </Menu.Item>
                        </Menu>
                    )
                }
            </Row>
        </Layout.Header>
    );
};
