import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

    const switchTheme = () => {
        const newTheme = theme == "dark" ? "light" : "dark"
        setTheme(newTheme)
    }

    const values = {
        theme:theme,
        switchTheme : switchTheme
    }

    useEffect(() => {
      localStorage.setItem("theme",theme)
    
    }, [theme])
    

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)