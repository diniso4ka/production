import {
    ChangeEvent, FC, memo, useMemo,
} from 'react';
import cls from './Select.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

interface SelectOption{
    value:string
    content: string
}

interface SelectProps{
className?: string
	label?:string
    options?: SelectOption[]
    value?:string
    onChange?: (value:string)=> void
    readonly?:boolean
}

export const Select = memo(({
    className, label, options, onChange, value, readonly,
}:SelectProps) => {
    const optionsList = useMemo(() => options?.map((opt) => <option key={opt.value} value={opt.value} className={cls.option}>{opt.content}</option>), []);
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };
    const mods:Mods = {};
    return (
        <div className={classNames(cls.Select, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select disabled={readonly} value={value} className={cls.select} onChange={onChangeHandler}>
                {optionsList}
            </select>
        </div>
    );
});
