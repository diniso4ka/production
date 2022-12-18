import { FC, useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/tests/hoocks/useAppDispatch/useAppDispatch';

interface ProfilePageHeaderProps{
className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation('Profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onHandleEdit = useCallback(() => {
        dispatch(profileActions.setReadonly());
    }, [dispatch]);
    const onHandleCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    const onHandleSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {readonly ? <Button onClick={onHandleEdit} theme={ThemeButton.OUTLINE} className={cls.editBtn}>{t('Edit')}</Button>
                : (
                    <>
                        <Button onClick={onHandleCancel} theme={ThemeButton.OUTLINE_RED} className={cls.editBtn}>{t('Cancel')}</Button>
                        <Button onClick={onHandleSave} theme={ThemeButton.OUTLINE} className={cls.saveBtn}>{t('Save')}</Button>
                    </>
                )}
        </div>
    );
};
