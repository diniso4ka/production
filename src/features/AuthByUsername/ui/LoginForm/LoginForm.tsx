import { FC, useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';

interface LoginFromProps{
className?: string
}

export const LoginForm: FC<LoginFromProps> = ({ className }) => {
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, []);
    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, []);
    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization form')} />
            {error && <Text text={t('Your email or password is incorrect')} theme={TextTheme.ERROR} />}
            <Input value={username} onChange={onChangeUsername} autofocus placeholder={t('Enter username')} className={cls.input} type="text" />
            <Input value={password} onChange={onChangePassword} placeholder={t('Enter password')} className={cls.input} type="text" />
            <Button theme={ThemeButton.OUTLINE} disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn}>{t('Sign In')}</Button>
        </div>
    );
};
