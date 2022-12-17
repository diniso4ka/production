import { FC, useEffect } from 'react';
import cls from './ProfileCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileStatus } from 'entities/Profile/model/selectors/getProfileStatus/getProfileStatus';

import { ThemeButton, Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';

interface ProfileCardProps{
className?: string
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation('Profile');
    const data = useSelector(getProfileData);
    const status = useSelector(getProfileStatus);
    const error = useSelector(getProfileError);

    return	(
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button theme={ThemeButton.OUTLINE} className={cls.editBtn}>{t('Edit')}</Button>
            </div>
            <div className={cls.data}>
                <Text text={data?.first} />
                <Text text={data?.lastname} />
            </div>
        </div>
    );
};
