import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { GlobalProvider } from './contexts/GlobalContext.jsx'
import { ApiStorage } from './contexts/ApiContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiStorage>
      <GlobalProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </GlobalProvider>
    </ApiStorage>
  </React.StrictMode>,
)
