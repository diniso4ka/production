import { loginReducer, LoginSchema } from 'features/AuthByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '' };

        expect(loginReducer(
			state as LoginSchema,
			loginActions.setUsername('denis'),
        )).toStrictEqual({ username: 'denis' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };

        expect(loginReducer(
			state as LoginSchema,
			loginActions.setPassword('qwerty'),
        )).toStrictEqual({ password: 'qwerty' });
    });
});
