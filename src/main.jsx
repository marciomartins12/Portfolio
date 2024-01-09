import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultPage from "./Componets/DefaultPage"
import Home from './Componets/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<DefaultPage/>}>
      <Route index element={<Home/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
