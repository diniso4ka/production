import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Counter } from 'entities/Counter';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            <Counter />
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
