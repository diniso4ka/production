import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
	className?: string
}

const ArticlesDetailsPage: FC<ArticlesPageProps> = ({ className }) => (
    <div className={classNames('', {}, [className])}>ArticlesDetailsPage</div>
);
export default ArticlesDetailsPage;
