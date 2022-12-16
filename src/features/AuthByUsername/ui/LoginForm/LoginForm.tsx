import { FC, useCallback, useEffect } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginStatus } from '../../model/selectors/getLoginStatus/getLoginStatus';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/tests/hoocks/useAppDispatch/useAppDispatch';

export interface LoginFromProps{
className?: string
    onSuccess:()=>void
}

const initialReducers:ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<LoginFromProps> = ({ className, onSuccess }) => {
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginStatus);

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Authorization form')} />
                {error && <Text text={t('Your email or password is incorrect')} theme={TextTheme.ERROR} />}
                <Input value={username} onChange={onChangeUsername} autofocus placeholder={t('Enter username')} className={cls.input} type="text" />
                <Input value={password} onChange={onChangePassword} placeholder={t('Enter password')} className={cls.input} type="text" />
                <Button theme={ThemeButton.OUTLINE} disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn}>{t('Sign In')}</Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default LoginForm;
