import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//router
import router from './routes/Routes';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
