import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer, fetchProfileData, ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/tests/hoocks/useAppDispatch/useAppDispatch';

const initialState:ReducersList = {
    profile: profileReducer,
};
const ProfilePage: FC = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={initialState} removeAfterUnmount>
            <div className={classNames('', {}, [])}>
                {t('PROFILE PAGE')}
            </div>
            <ProfileCard />

        </DynamicModuleLoader>
    );
};

export default ProfilePage;
