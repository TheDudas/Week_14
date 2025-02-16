import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App_old.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, CardBody } from "react-bootstrap"
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
