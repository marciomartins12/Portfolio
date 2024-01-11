import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter} from "react-router-dom"
import RoutesAnimated from './Componets/Routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesAnimated/>
    </BrowserRouter>
  </React.StrictMode>,
)
