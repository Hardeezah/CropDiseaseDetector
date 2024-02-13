import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/pages/Home'
import Scan from './components/pages/Scan'
const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <App />
      </>
    ),
  },
  {
    path: '/home',
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: '/scan',
    element: (
      <>
        <Scan />
      </>
    ),
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
