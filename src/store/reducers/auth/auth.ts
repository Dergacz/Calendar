import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../models/models";

interface IAuth {
    isAuth: boolean;
    user: IUser | null;
    isLoading: boolean;
    error: string;
}

const initialState: IAuth = {
    isAuth: false,
    error: '',
    isLoading: false,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
            state.isLoading = false;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        setUser(state, action: PayloadAction<IUser | null>) {
            state.user = action.payload;
        }
    }
});

export default authSlice.reducer;