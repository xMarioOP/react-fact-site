import { useState, useEffect } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  const storageDarkMode = JSON.parse(localStorage.getItem("darkMode"))
  console.log(localStorage);

  const [darkMode, setDarkMode] = useState(storageDarkMode || false)

  useEffect(() => localStorage.setItem("darkMode", JSON.stringify(darkMode)),[darkMode])

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  } 

  return (
    <div className="container">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App
