import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import NotFoundPage from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

// @ts-ignore
const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Light = Template.bind({});

Light.args = {
};

export const Dark = Template.bind({});

Dark.args = {
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
