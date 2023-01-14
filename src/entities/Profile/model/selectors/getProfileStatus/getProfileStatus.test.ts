import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileStatus } from 'entities/Profile';

describe('getProfileStatus', () => {
    test('should return profile status', () => {
        const data:DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileStatus(data as StateSchema)).toEqual(true);
    });
    test('should return false', () => {
        const data:DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileStatus(data as StateSchema)).toEqual(false);
    });
});
