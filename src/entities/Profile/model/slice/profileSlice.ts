import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema, ProfileType } from '../types/profile';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';

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
        setReadonly: (state) => {
            state.readonly = false;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },
        updateProfile: (state, action:PayloadAction<ProfileType>) => {
            state.form = { ...state.form, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state, action) => {
            state.isLoading = true;
            state.error = undefined;
        })
            .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<ProfileType>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = 'error';
            })
            .addCase(updateProfileData.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
                state.validateErrors = undefined;
            })
            .addCase(updateProfileData.fulfilled, (state, action:PayloadAction<ProfileType>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
