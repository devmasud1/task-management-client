import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Router/Routes.jsx'
import 'react-awesome-button/dist/themes/theme-blue.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={Routes} />
  </React.StrictMode>,
)
