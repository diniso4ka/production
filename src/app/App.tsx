import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import './styles/index.scss'

import { useTheme } from 'app/providers/ThemeProvider'

import { classNames } from 'shared/lib/classNames/classNames'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'







const App = () => {
   const { theme, toggleTheme } = useTheme()






   return (
      <div className={classNames('app', {}, [theme])}>
         <button onClick={toggleTheme}>Toggle</button>
         <Link to={'/'}>Main</Link>
         <Link to={'/about'}>About</Link>
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
      </div>
   )
}

export default App