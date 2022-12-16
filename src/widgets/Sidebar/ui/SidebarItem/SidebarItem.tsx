import { memo } from 'react';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemProps{
	item?: SidebarItemType
    collapsed?:boolean
}

export const SidebarItem = memo(({ item, collapsed }:SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink className={classNames(cls.linkBlock, { [cls.collapsed]: collapsed }, [])} theme={AppLinkTheme.SECONDARY} to={item.path}>
            <item.Icon className={cls.icon} />
            <span className={cls.linkTitle}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
