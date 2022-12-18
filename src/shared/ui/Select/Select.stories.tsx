import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});

Light.args = {
    label: 'Currency',
    options: [
        { value: 'RUB', content: 'RUB' },
        { value: 'USD', content: 'USD' },
        { value: 'EUR', content: 'EUR' },
    ],

};

export const Dark = Template.bind({});

Dark.args = {
    label: 'Currency',
    options: [
        { value: 'RUB', content: 'RUB' },
        { value: 'USD', content: 'USD' },
        { value: 'EUR', content: 'EUR' },
    ],
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
