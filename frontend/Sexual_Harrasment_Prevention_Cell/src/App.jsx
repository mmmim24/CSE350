import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ComplaintForm from './components/ComplaintForm'

function App() {

  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
         {/* multi-step form */}
        <Route path="/complaintform" element={<ComplaintForm />} />  
      </Routes>
      <Footer/>
    </React.Fragment>
  )
}

export default App
