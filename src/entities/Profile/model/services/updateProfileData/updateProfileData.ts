import { Action, createAsyncThunk } from '@reduxjs/toolkit';

import { ProfileType } from '../../types/profile';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>('profile/UpdateProfileData', async (
    _,
    { rejectWithValue, extra, getState },
) => {
    const formData = getProfileForm(getState());
    try {
        const response = await extra.api.put<ProfileType>('/profile', formData);
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (err) {
        return rejectWithValue('error');
    }
});
