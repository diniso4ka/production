import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

describe('getProfileValidateErrors', () => {
    test('should return profile validate error', () => {
        const data:DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.SERVER_ERROR],
            },
        };
        expect(getProfileValidateErrors(data as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test('should return undefined', () => {
        const data:DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileValidateErrors(data as StateSchema)).toEqual(undefined);
    });
});
