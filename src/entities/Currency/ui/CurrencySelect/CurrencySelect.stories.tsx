import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'shared/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Light = Template.bind({});

Light.args = {
};
