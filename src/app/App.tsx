import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import './styles/index.scss'

import { useTheme } from 'app/providers/ThemeProvider'

import { classNames } from 'shared/lib/classNames/classNames'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { Navbar } from 'widgets/Navbar/ui/Navbar'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher'





const App = () => {
   const { theme, toggleTheme } = useTheme()






   return (
      <div className={classNames('app', {}, [theme])}>
         <Navbar />
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               {Object.values(routeConfig).map(({ path, element }) =>
                  <Route
                     key={path}
                     path={path}
                     element={element} />
               )}
            </Routes>
         </Suspense>
         <ThemeSwitcher />
      </div>
   )
}

export default App