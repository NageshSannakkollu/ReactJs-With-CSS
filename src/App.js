import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import LoginPage from "./components/LoginPage"
import HomePage from "./components/HomePage"
import MainQueuePage from './components/MainQueuePage'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/queue" element={<MainQueuePage/>}/>
    </Routes>
  </BrowserRouter>
)

export default App