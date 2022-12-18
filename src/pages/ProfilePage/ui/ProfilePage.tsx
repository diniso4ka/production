import { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    profileReducer, fetchProfileData, ProfileCard, getProfileError,
    getProfileData, getProfileStatus, profileActions, getProfileReadonly,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/tests/hoocks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';

const initialState:ReducersList = {
    profile: profileReducer,
};
const ProfilePage: FC = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const form = useSelector(getProfileForm);
    const status = useSelector(getProfileStatus);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);
    const onChangeLastname = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);
    const onChangeAge = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);
    const onChangeCity = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={initialState} removeAfterUnmount>
            <ProfilePageHeader />
            <ProfileCard
                data={form}
                isLoading={status}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
            />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
