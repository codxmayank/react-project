import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.tsx'
import Contact from './components/Contact.tsx'
import About from './components/About.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App
  },
  {
    path: '/home',
    Component: Home
  },
  {
    path: '/contact',
    Component: Contact,
  },
  {
    path: '/about',
    Component: About,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
