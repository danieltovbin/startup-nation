import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ToastComp from './Components/Helpers/ToastComp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastComp />
    <App />
  </React.StrictMode>,
)
