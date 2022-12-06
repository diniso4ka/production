import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import axios from 'axios';

interface LoginByUsernameProps {
    username:string,
    password:string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>('login/LoginByUsername', async (authData, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:8000/login', authData);
        if (!response.data) {
            throw new Error();
        }
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify((response.data)));
        thunkAPI.dispatch(userActions.setAuthData(response.data));
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue('error');
    }
});
