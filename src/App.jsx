import { useState } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

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
