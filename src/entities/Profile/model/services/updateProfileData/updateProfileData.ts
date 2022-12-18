import { createAsyncThunk } from '@reduxjs/toolkit';

import { ProfileType, ValidateProfileError } from '../../types/profile';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { validateProfileData } from 'entities/Profile/model/services/validateProfile/validateProfile';

export const updateProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<ValidateProfileError[]>>('profile/UpdateProfileData', async (
    _,
    { rejectWithValue, extra, getState },
) => {
    const formData = getProfileForm(getState());
    const errors = validateProfileData(formData);
    if (errors.length) {
        return rejectWithValue(errors);
    }
    try {
        const response = await extra.api.put<ProfileType>('/profile', formData);
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (err) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
