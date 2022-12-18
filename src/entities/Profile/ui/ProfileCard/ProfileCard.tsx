import { FC } from 'react';
import cls from './ProfileCard.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { ProfileType } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

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
    onChangeUsername?:(value?:string)=>void
    onChangeAvatar?:(value?:string)=>void
    onChangeCurrency?:(value?:Currency)=>void
    onChangeCountry?:(value?:Country)=>void
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
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,

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

    const mods:Mods = {
        [cls.editing]: !readonly,
    };

    return	(
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar
                    && (
                        <div className={cls.avatarWrapper}>
                            <Avatar className={cls.avatar} src={data?.avatar} alt={t('Avatar')} />
                        </div>
                    )}
                <Input readonly={readonly} onChange={onChangeFirstname} className={cls.inputItem} placeholder={t('Name')} value={data?.first} />
                <Input readonly={readonly} onChange={onChangeLastname} className={cls.inputItem} placeholder={t('Lastname')} value={data?.lastname} />
                <Input readonly={readonly} onChange={onChangeAge} className={cls.inputItem} placeholder={t('Age')} value={data?.age} />
                <Input readonly={readonly} onChange={onChangeCity} className={cls.inputItem} placeholder={t('City')} value={data?.city} />
                <Input readonly={readonly} onChange={onChangeUsername} className={cls.inputItem} placeholder={t('Username')} value={data?.username} />
                <Input readonly={readonly} onChange={onChangeAvatar} className={cls.inputItem} placeholder={t('Avatar url')} value={data?.avatar} />
                <CurrencySelect className={cls.inputItem} readonly={readonly} onChange={onChangeCurrency} value={data?.currency} />
                <CountrySelect className={cls.inputItem} readonly={readonly} onChange={onChangeCountry} value={data?.country} />
            </div>
        </div>
    );
};
