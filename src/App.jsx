import React, { useEffect, useState } from "react"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"

const App = () => {

  // Load theme from local storage
  const [darkMode, setDarkMode] = useState( () =>
    {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? savedTheme === "dark" : true;
    }
  )

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } 
    else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light");
    }
  }, [darkMode])

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
    </>  
  )
}

export default App
