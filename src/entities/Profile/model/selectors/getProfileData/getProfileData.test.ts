import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from 'entities/Profile';

describe('getProfileData', () => {
    test('should return profile data', () => {
        const data = {
            first: 'Denis',
            lastname: 'Ronaldo',
            username: 'admin',
            age: 21,
            currency: Currency.EUR,
            country: Country.Armenia,
            avatar: 'none',
        };
        const state:DeepPartial<StateSchema> = { profile: { data } };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should return undefined', () => {
        const state:DeepPartial<StateSchema> = { profile: {} };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
