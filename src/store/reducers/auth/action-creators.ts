import {Dispatch} from "@reduxjs/toolkit";
import {authSlice} from "./auth";
import axios from "axios";
import {IUser} from "../../../models/models";

export const login = (username: string, password: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(authSlice.actions.setLoading(true));
        const response = await axios.get<IUser[]>('./users.json');
        const mockUsers = response.data.find(user => user.username === username && user.password === password);
        if (mockUsers) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('username', mockUsers.username);
            dispatch(authSlice.actions.setAuth(true));
            dispatch(authSlice.actions.setUser(mockUsers));
        } else {
            dispatch(authSlice.actions.setError('Uncorrected login or password'))
        }
    } catch (e) {
        dispatch(authSlice.actions.setError('Some error'));
    } finally {
        dispatch(authSlice.actions.setLoading(false));
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    try {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        dispatch(authSlice.actions.setUser(null));
        dispatch(authSlice.actions.setAuth(false));
    } catch (e) {
        dispatch(authSlice.actions.setError('Except error'));
    }
}

export const setAuthAction = (isAuth: boolean) => (dispatch: Dispatch) => {
    dispatch(authSlice.actions.setAuth(isAuth));
}

export const setUserAction = (user: IUser) => (dispatch: Dispatch) => {
    dispatch(authSlice.actions.setUser(user));
}
