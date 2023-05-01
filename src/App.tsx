import React, {useEffect} from 'react';
import {AppRouter} from "./components/AppRouter";
import {Navbar} from "./components/Navbar";
import {Layout} from "antd";
import './App.css';
import {useAppDispatch} from "./hooks/hooks";
import {setAuthAction, setUserAction} from "./store/reducers/auth/action-creators";
import {IUser} from "./models/models";

const App = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            dispatch(setUserAction({username: localStorage.getItem('username')} as IUser));
            dispatch(setAuthAction(true));
        }
    }, []);
    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
};

export default App;