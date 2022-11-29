import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/Storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {
};

Primary.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: 'qwerty', password: 'qwerty' },
})];

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: 'qwerty', password: 'qwerty' },
})];
