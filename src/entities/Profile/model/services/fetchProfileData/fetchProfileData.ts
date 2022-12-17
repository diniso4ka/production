import { Action, createAsyncThunk } from '@reduxjs/toolkit';

import { ProfileType } from '../../types/profile';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';

export const fetchProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>('profile/FetchProfileData', async (
    _,
    { rejectWithValue, extra },
) => {
    try {
        const response = await extra.api.get('/profile');
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (err) {
        return rejectWithValue('error');
    }
});
