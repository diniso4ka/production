import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from 'entities/Profile';

describe('getProfileError', () => {
    test('should return profile error', () => {
        const data:DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(data as StateSchema)).toEqual('error');
    });
    test('should return undefined', () => {
        const data:DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileError(data as StateSchema)).toEqual(undefined);
    });
});
