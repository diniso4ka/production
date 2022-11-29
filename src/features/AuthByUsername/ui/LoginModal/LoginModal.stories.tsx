import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';
import { StoreDecorator } from 'shared/config/Storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    isOpen: true,
};

Primary.decorators = [StoreDecorator({
    loginForm: { username: 'qwerty', password: 'qwerty' },
})];

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    isOpen: true,
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: 'qwerty', password: 'qwerty' },
})];
