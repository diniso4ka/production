import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/Storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.png';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});

Light.args = {
};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 21,
            city: 'Erevan',
            country: Country.Armenia,
            first: 'Denis',
            lastname: 'Zagrosh',
            currency: Currency.EUR,
            avatar,
        },
    },
})];

export const Dark = Template.bind({});

Dark.args = {
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 21,
            city: 'Erevan',
            country: Country.Armenia,
            first: 'Denis',
            lastname: 'Zagrosh',
            currency: Currency.EUR,
            avatar,
        },
    },
})];
