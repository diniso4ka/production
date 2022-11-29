import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Button',
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    children: 'Button',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    theme: ThemeButton.CLEAR,
    children: 'Button',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: ThemeButton.CLEAR,
    children: 'Button',
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

//
export const ClearInverted = Template.bind({});
ClearInverted.args = {
    theme: ThemeButton.CLEAR_INVERTED,
    children: 'Button',
};

export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
    theme: ThemeButton.CLEAR_INVERTED,
    children: 'Button',
};

ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined = Template.bind({});
Outlined.args = {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
};

OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Switcher = Template.bind({});
Switcher.args = {
    theme: ThemeButton.SWITCHER,
    children: '>',
};

export const SwitcherDark = Template.bind({});
SwitcherDark.args = {
    theme: ThemeButton.SWITCHER,
    children: '>',
};

SwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Button',
    disabled: true,
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
    children: 'Button',
    disabled: true,
};

DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];
