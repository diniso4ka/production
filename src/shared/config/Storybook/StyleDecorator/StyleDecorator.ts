import 'app/styles/index.scss';
import { Story } from '@storybook/react';

export function StyleDecorator(story:()=> Story) {
    return story();
}
