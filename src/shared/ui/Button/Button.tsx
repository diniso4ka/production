import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
   CLEAR = 'clear',
   CLEAR_INVERTED = 'clearInverted',
   OUTLINE='outline',
   SWITCHER='switcher'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string,
   theme?: ThemeButton
    disabled?:boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        disabled,
        ...otherProps
    } = props;
    return (
        <button
            disabled={disabled}
            className={classNames(cls.Button, { [cls.disabled]: disabled }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
