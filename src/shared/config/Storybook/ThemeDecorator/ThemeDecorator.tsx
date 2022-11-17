import { Theme } from 'app/providers/ThemeProvider';
import { Story } from '@storybook/react';

export function ThemeDecorator(theme:Theme) {
    return ((StoryComponent: Story) => (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    )
    );
}
