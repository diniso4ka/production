import axios from 'axios';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from 'entities/Profile/model/services/validateProfile/validateProfile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

jest.mock('axios');
const data = {
    first: 'Denis',
    lastname: 'Ronaldo',
    username: 'admin',
    age: 21,
    city: 'Erevan',
    currency: Currency.EUR,
    country: Country.Armenia,
    avatar: 'none',
};

describe('validateProfile', () => {
    test('incorrect firstname and lastname', async () => {
        expect(validateProfileData({ ...data, first: '', lastname: '' })).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('incorrect age', async () => {
        expect(validateProfileData({ ...data, age: undefined })).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('incorrect all', async () => {
        expect(validateProfileData({ })).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_CITY, ValidateProfileError.INCORRECT_USERNAME]);
    });
});
