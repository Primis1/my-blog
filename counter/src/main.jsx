import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Btn from './button.jsx' // import your second component here
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Btn /> 
    {/* <App /> */}
  </React.StrictMode>,
)