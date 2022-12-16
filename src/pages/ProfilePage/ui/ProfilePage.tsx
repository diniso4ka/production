import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps{
className?: string
}
const initialState:ReducersList = {
    profile: profileReducer,
};
const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={initialState} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
