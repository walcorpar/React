import { useState } from 'react'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import './assets/css/App.css'

function App() {
  return (
    <div className="layout-grid">
      <Navbar /> 
      <Home />
      <Footer />
    </div>
  );
}

export default App
