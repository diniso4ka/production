import { profileReducer, profileActions } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { updateProfileData } from 'entities/Profile';

describe('profileSlice', () => {
    const data = {
        username: 'Denis', age: 21,
    };
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(
			state as ProfileSchema,
			profileActions.setReadonly(),
        )).toEqual({ readonly: false });
    });
    test('test cancel edit ', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false, data };

        expect(profileReducer(
			state as ProfileSchema,
			profileActions.cancelEdit(),
        )).toEqual({
            readonly: true, data, form: data, validateErrors: undefined,
        });
    });
    test('test set password', () => {
        const state: DeepPartial<ProfileSchema> = { form: data };

        expect(profileReducer(
			state as ProfileSchema,
			profileActions.updateProfile({ username: 'Kolya' }),
        )).toEqual({ form: { ...data, username: 'Kolya' } });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR] };

        expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.pending,
        )).toEqual({ isLoading: true, validateErrors: undefined, error: undefined });
    });
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true };

        expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false, validateError: undefined, error: undefined, readonly: true, form: data, data,
        });
    });
});
