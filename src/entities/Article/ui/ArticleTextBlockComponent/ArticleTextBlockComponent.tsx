import { FC } from 'react';
import cls from './ArticleTextBlockComponent.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleTextBlockComponentProps {
	className?: string
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({ className }) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        ArticleTextBlockComponent
    </div>
);
