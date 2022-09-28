import { ThemeContextProps } from './../../../app/providers/ThemeProvider/lib/ThemeContext';

import { classNames } from 'shared/lib/classNames/classNames';
import darkIcon from 'shared/assets/icons/theme-dark.svg'
import lightIcon from 'shared/assets/icons/light-dark.svg'

interface ThemeContextProps {
   className?: string
}

export const ThemeSwitcher = ({ className }: ThemeContextProps) => {

   return (
      <div>
      <darkIcon/>
      < /div>
   )
}
