import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.png';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    readonly: true,
    data: {
        username: 'admin',
        age: 21,
        city: 'Erevan',
        country: Country.Armenia,
        first: 'Denis',
        lastname: 'Zagrosh',
        currency: Currency.EUR,
        avatar,
    },
};
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
    error: 'error',
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    readonly: true,
    data: {
        username: 'admin',
        age: 21,
        city: 'Erevan',
        country: Country.Armenia,
        first: 'Denis',
        lastname: 'Zagrosh',
        currency: Currency.EUR,
        avatar,
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
