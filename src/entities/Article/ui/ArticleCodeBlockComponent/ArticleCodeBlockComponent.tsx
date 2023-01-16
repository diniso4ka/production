import { FC } from 'react';
import cls from './ArticleCodeBlockComponent.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleCodeBlockComponentProps {
	className?: string
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({ className }) => (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
        ArticleCodeBlockComponent
    </div>
);
