import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import { useState } from 'react';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChange = (val:string) => {
        setValue(val);
    };
    return (
        <div>
            <Input placeholder="Введите текст" onChange={onChange} value={value} />
            {t('Основная')}
        </div>
    );
};

export default MainPage;
