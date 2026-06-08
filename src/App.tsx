import './App.css'
import logger from '@/utils/logger'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import { ThemeEnum } from '@/types/index'


function App() {
  // Setup theme dark, light
  // Source: https://www.youtube.com/watch?v=72-UZdWqDlk&list=PLY8SjtSzFw7RLwEwDsw7OrgqawSOdwCPb&index=22 
  const [theme, setTheme] = useState(ThemeEnum.DARK)

  const toggle = () => {
    setTheme((t: ThemeEnum) => t === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK)
  }
  logger.info(`Current theme: ${theme}`)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])


  return (
    <div
      className={`App ${theme}`}
      date-test='app-test'
      data-theme={theme}
    >
      {/* ========== Navbar ============ */}
      <Navbar
        theme={theme}
        toggle={toggle}
      />

      {/* ========== Content ============ */}
      <div className="app-content">
        <h1>App content</h1>
      </div>

      {/* =========== Footer ========== */}
     
    </div>
  )
}

export default App

//https://www.youtube.com/watch?v=JSFIGIA9Zrk&list=PLY8SjtSzFw7RLwEwDsw7OrgqawSOdwCPb&index=6