import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlesDetailsPage from './ArticlesDetailsPage';

export default {
    title: 'pages/ArticlesDetailsPage',
    component: ArticlesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesDetailsPage>;

const Template: ComponentStory<typeof ArticlesDetailsPage> = (args) => <ArticlesDetailsPage {...args} />;

export const Light = Template.bind({});

Light.args = {};

export const Dark = Template.bind({});

Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
