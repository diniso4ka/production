import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});

Light.args = {
    isOpen: true,
    children: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
};

export const Dark = Template.bind({});

Dark.args = {
    isOpen: true,
    children: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
