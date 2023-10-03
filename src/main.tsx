import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import SignIn from './pages/SignIn/SignIn.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/signIn',
    element: <SignIn />
  },
  {
    path: '/signUp',
    element: <SignUp />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
