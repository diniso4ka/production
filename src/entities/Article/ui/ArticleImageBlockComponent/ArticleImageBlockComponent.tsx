import { FC } from 'react';
import cls from './ArticleImageBlockComponent.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleImageBlockComponentProps {
	className?: string
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({ className }) => (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        ArticleImageBlockComponent
    </div>
);
