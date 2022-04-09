import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { RefProvider } from './contexts/RefContext'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider>
        <RefProvider>
        <App />
        </RefProvider>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
)
