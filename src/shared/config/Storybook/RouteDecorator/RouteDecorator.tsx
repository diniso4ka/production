import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export function RouteDecorator(story:()=> Story) {
    return (
        <BrowserRouter>
            {story()}
        </BrowserRouter>
    );
}
