import { FC } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';

interface LoginFromProps{
className?: string
}

export const LoginForm: FC<LoginFromProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus placeholder={t('Enter username')} className={cls.input} type="text" />
            <Input placeholder={t('Enter password')} className={cls.input} type="text" />
            <Button className={cls.loginBtn}>{t('Sign In')}</Button>
        </div>
    );
};
