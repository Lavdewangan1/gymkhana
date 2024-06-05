import React, { createContext, useState, useLayoutEffect } from "react"
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";

const ThemeContext = createContext("dark")

const lightTheme = {
  name: "light",
  background: "#fff",
  color: "#000",
  icon: sun,
  button: {
    buttonBgColor: "#000",
    buttonTextColor: "#fff",
  },
  navbar: {
    background: "#fff",
    color: "#000",
  },
}

const darkTheme = {
  name: "dark",
  background: "#000",
  color: "#fff",
  icon: moon,
  button: {
    buttonBgColor: "#fff",
    buttonTextColor: "#000",
  },
  navbar: {
    background: "#111827",
    color: "#fff",
  },
}


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)
  const [themeName, setThemeName] = useState("light")
  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme
    const newThemeName = themeName === "light" ? "dark" : "light"
    setTheme(newTheme)
    setThemeName(newThemeName)
    localStorage.setItem("selectedTheme", newThemeName)
  }


  // Retrieve theme from local storage, if available

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme")
    if (savedTheme) {
      savedTheme === "light" ? setThemeName("light") : setThemeName("dark")
      savedTheme === "light" ? setTheme(lightTheme) : setTheme(darkTheme)
    }

  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme, themeName }}>{children}</ThemeContext.Provider>
}

export { ThemeProvider, ThemeContext }
