import { FC } from 'react';
import cls from './ProfileCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { ProfileType } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';

interface ProfileCardProps{
className?: string
    data?: ProfileType
    error?: string
    isLoading?: boolean
    readonly?:boolean
    onChangeFirstname?:(value?:string)=>void
    onChangeLastname?:(value?:string)=>void
    onChangeAge?:(value?:string)=>void
    onChangeCity?:(value?:string)=>void
}

export const ProfileCard: FC<ProfileCardProps> = ({
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,

}) => {
    const { t } = useTranslation('Profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [className, cls.error])}>
                <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title={t('An error has occurred')} text={t('Try to reload the page')} />
            </div>
        );
    }

    return	(
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input readonly={readonly} onChange={onChangeFirstname} className={cls.inputItem} placeholder={t('Your name')} value={data?.first} />
                <Input readonly={readonly} onChange={onChangeLastname} className={cls.inputItem} placeholder={t('Your lastname')} value={data?.lastname} />
                <Input readonly={readonly} onChange={onChangeAge} className={cls.inputItem} placeholder={t('Your age')} value={data?.age} />
                <Input readonly={readonly} onChange={onChangeCity} className={cls.inputItem} placeholder={t('Your city')} value={data?.city} />
            </div>
        </div>
    );
};
