import { ProfileType } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

export function validateProfileData(profile?:ProfileType) {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        first, age, lastname, username, city,
    } = profile;

    const errors:ValidateProfileError[] = [];
    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!city || !/[a-zA-Z]/.test(city)) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }
    if (!username || !username.match(/[a-zA-Z]+/g)) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }
    return errors;
}
