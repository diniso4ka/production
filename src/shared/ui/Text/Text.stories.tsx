import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'Title',
    text: 'texttexttexttexttexttexttexttexttexttext',
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    title: 'Title',
    text: 'texttexttexttexttexttexttexttexttexttext',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});

Error.args = {
    title: 'Title',
    text: 'texttexttexttexttexttexttexttexttexttext',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
    title: 'Title',
};

export const OnlyTitleDark = Template.bind({});

OnlyTitleDark.args = {
    title: 'Title',
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});

OnlyText.args = {
    text: 'texttexttexttexttexttexttexttexttexttext',
};

export const OnlyTextDark = Template.bind({});

OnlyTextDark.args = {
    text: 'texttexttexttexttexttexttexttexttexttext',
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
