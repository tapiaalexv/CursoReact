import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import AppModularizada from "./AppModularizada.jsx";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppModularizada />
  </StrictMode>,
)
