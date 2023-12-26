import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
