import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './router/MainRouter'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <AuthProvider>
   <RouterProvider router={MainRouter}></RouterProvider>
   </AuthProvider>
   <Toaster
   position="top-right"
   reverseOrder={false}></Toaster>
   </QueryClientProvider>
  </React.StrictMode>,
)
