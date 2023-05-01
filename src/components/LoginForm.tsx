import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/utils";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {login} from "../store/reducers/auth/action-creators";

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const { error, isLoading } = useAppSelector(state => state.authSlice);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const submit = () => {
        dispatch(login(username, password));
    }
    return (
        <Form
            onFinish={submit}
        >
            {
                error && (
                    <div style={{color: 'red'}}>
                        {error}
                    </div>
                )
            }
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
