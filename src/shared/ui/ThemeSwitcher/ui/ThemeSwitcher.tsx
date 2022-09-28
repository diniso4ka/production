import { FC } from 'react';
import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/light-dark.svg'
import { useTheme } from 'app/providers/ThemeProvider';

interface ThemeSwitcherProps {
   className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
   const { theme, toggleTheme } = useTheme()

   return (
      <button className={classNames(cls.ThemeSwitcher, {}, [className])}>
         <DarkIcon />
      </button>
   )
}
