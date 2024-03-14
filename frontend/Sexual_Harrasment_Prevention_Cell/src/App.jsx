import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ComplaintForm from './components/ComplaintForm'
import ComplaintDetails from './components/ComplaintDetails'
import Footer from './components/Footer'
import Error from './components/Error'

function App() {

  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
         {/* multi-step form */}
        <Route path="/complaintform" element={<ComplaintForm />} />  
        <Route path="/complaint/:id" element={<ComplaintDetails />} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </React.Fragment>
  )
}

export default App
