import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
	className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => (
    <div className={classNames('', {}, [className])}>ARTICLES</div>
);
export default ArticlesPage;
