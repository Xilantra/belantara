import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({
  dark: false,
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isDark = document.documentElement.classList.contains('dark')
    setDark(isDark)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', next)
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    }
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
export default ThemeContext
