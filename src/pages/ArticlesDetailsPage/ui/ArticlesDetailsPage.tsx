import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArticlesPageProps {
	className?: string
}

const ArticlesDetailsPage: FC<ArticlesPageProps> = ({ className }) => {
    const { id } = useParams<{id:string}>();
    const { t } = useTranslation('article-details');

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }
    return (
        <div className={classNames('', {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};
export default ArticlesDetailsPage;
