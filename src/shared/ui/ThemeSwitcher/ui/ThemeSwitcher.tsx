
import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme, Theme } from 'app/providers/ThemeProvider';

import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'

import { Button } from 'shared/ui/Button/Button';
import { ThemeButton } from 'shared/ui/Button/Button'


interface ThemeSwitcherProps {
   className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
   const { theme, toggleTheme } = useTheme()

   return (
      <Button
         theme={ThemeButton.CLEAR}
         onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
         {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
   )
}
