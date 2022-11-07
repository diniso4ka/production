import {FC} from 'react'
import cls from './PageError.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';

interface PageErrorProps{
className?: string
}

const onClickReboot =()=>{
	location.reload()
}

export const PageError: FC<PageErrorProps> = ({className}) => {
const {t} = useTranslation()
   return (
      <div className={classNames(cls.PageError, {}, [className])}>
		  <p>{t('Произошла ошибка')}</p>
		  <Button onClick={onClickReboot}>{t('Перезагрузить')}</Button>
      </div>
   )
}
