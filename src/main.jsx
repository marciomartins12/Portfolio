import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultPage from "./Componets/DefaultPage"
import Home from './Componets/Home'
import Projects from './Componets/Projects'
import Contacts from './Componets/Contacts'
import About from './Componets/About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home/>} />
          <Route path="aboutme" element={<About/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="contacts" element={<Contacts/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
