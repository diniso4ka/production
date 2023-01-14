import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from 'entities/Profile';

describe('getProfileReadonly', () => {
    test('should return profile readonly', () => {
        const data:DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(data as StateSchema)).toEqual(true);
    });
    test('should return undefined', () => {
        const data:DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileReadonly(data as StateSchema)).toEqual(undefined);
    });
});
