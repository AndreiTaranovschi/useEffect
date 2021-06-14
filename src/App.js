import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setwindowWidth(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)


  }, [])

  return (
    <div className="App">
      {windowWidth}
    </div>
  )

}

export default App;
