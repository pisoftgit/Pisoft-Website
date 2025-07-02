import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Smooth from './components/Smooth.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>

 <Smooth></Smooth>
   <App />
  </BrowserRouter>

  

)
