import { memo, useCallback } from 'react';
import cls from './CurrencySelect.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country';

interface CountrySelectProps{
   className?: string
   value?: Country
   onChange?:(value:Country)=> void
    readonly?: boolean
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}:CountrySelectProps) => {
    const { t } = useTranslation();
    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <Select
            className={className}
            readonly={readonly}
            value={value}
            label={t('Country')}
            options={options}
            onChange={onChangeHandler}
        />
    );
});
