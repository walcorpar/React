import { useState } from 'react'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import RegisterPage from './Components/Register.jsx'
import LoginPage from './Components/LoginPage.jsx'
import './assets/css/App.css'

function App() {
  return (
    <div className="layout-grid">
      <Navbar /> 
     {/* <Home /> */}
     {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App
