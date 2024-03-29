import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';

export interface SidebarItemType {
	path:string
	text: string
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Home',
        Icon: HomeIcon,
    }, {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
    }, {
        path: RoutePath.about,
        text: 'About',
        Icon: AboutIcon,
    }, {
        path: RoutePath.article,
        text: 'Articles',
        Icon: ArticleIcon,
    },

];
