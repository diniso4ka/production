import { useTranslation } from 'react-i18next';
import {useEffect} from 'react';

const AboutPage = () => {
    const { t } = useTranslation('about');
    useEffect(()=>{
        if(Math.random() > 0.5){
            throw new Error()
        }
    },[])
    return (
        <div>{t('О сайте')}</div>
    );
};

export default AboutPage;
