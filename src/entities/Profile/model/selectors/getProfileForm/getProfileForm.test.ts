import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';

describe('getProfileForm', () => {
    test('should return profile form', () => {
        const data = {
            first: 'Denis',
            lastname: 'Ronaldo',
            username: 'admin',
            age: 21,
            currency: Currency.EUR,
            country: Country.Armenia,
            avatar: 'none',
        };
        const state:DeepPartial<StateSchema> = { profile: { form: data } };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should return undefined', () => {
        const state:DeepPartial<StateSchema> = { profile: {} };
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
