import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { ProfilePage } from 'pages/ProfilePage';
import NotFoundPage from 'pages/NotFoundPage/ui/NotFoundPage';

import { RouteProps } from 'react-router-dom';
import { ArticlePage } from 'pages/ArticlesPage';
import { ArticlesDetailsPage } from 'pages/ArticlesDetailsPage';

type AppRoutesProps = RouteProps&{
    authOnly?: boolean
}

export enum AppRoutes {
   MAIN = 'main',
   ABOUT = 'about',
   PROFILE='profile',
   ARTICLE='article',
   ARTICLE_DETAILS='article_details',

   // last
   NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLE]: '/article',
    [AppRoutes.ARTICLE_DETAILS]: '/article/',

    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE]: {
        path: RoutePath.article,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticlesDetailsPage />,
        authOnly: true,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
