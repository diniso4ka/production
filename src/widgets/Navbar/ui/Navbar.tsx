import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, []);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onLogout}>{t('Log Out')}</Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onShowModal}>{t('Sign In')}</Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
