import { useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

interface SidebarProps {
   className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.links}>
                <AppLink className={cls.linkBlock} theme={AppLinkTheme.SECONDARY} to="/">
                    <HomeIcon className={cls.icon} />
                    <span className={cls.linkTitle}>
                        {t('Main page')}
                    </span>
                </AppLink>

                <AppLink className={cls.linkBlock} theme={AppLinkTheme.SECONDARY} to="/about">
                    <AboutIcon className={cls.icon} />
                    <span className={cls.linkTitle}>{t('About page')}</span>
                </AppLink>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
            <Button theme={ThemeButton.SWITCHER} className={cls.button} data-testid="sidebar-toggle" onClick={onToggle}>{collapsed ? t('<') : t('>')}</Button>
        </div>
    );
};
