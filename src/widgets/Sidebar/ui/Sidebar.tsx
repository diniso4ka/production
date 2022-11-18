import { useState } from 'react';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

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
            <button data-testid="sidebar-toggle" onClick={onToggle}>{t('toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
