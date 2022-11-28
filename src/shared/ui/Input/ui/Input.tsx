import {
    ChangeEvent,
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'|'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string
	value?:string
	onChange?:(value:string)=>void
    autofocus?:boolean
}

export const Input = memo((props:InputProps) => {
    const {
        className, value, onChange, type = 'text', placeholder, autofocus, ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    const onSelect = (e:any) => {
        setCaretPosition(e?.target?.selectionStart);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
            <div className={cls.caretWrapper}>
                <input ref={ref} onSelect={onSelect} onFocus={onFocus} onBlur={onBlur} className={cls.input} onChange={onChangeHandler} type={type} {...otherProps} />
                { isFocused && <span style={{ left: `${caretPosition * 9}px` }} className={cls.caret} />}
            </div>

        </div>
    );
});
