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
import Profile from './components/Profile'
import Map from './components/Map'

function App() {

  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
         {/* multi-step form */}
        <Route path="/complaintform" element={<ComplaintForm />} />  
        <Route path="/complaint/:id" element={<ComplaintDetails />} />
        <Route path="/about" element={<Map />} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </React.Fragment>
  )
}

export default App
