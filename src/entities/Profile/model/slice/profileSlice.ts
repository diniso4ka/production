import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema, ProfileType } from '../types/profile';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData';

const initialState:ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state, action) => {
            state.isLoading = true;
            state.error = undefined;
        })
            .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<ProfileType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = 'error';
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
