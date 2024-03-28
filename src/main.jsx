import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Main from './components/main/Main.jsx'
import Home from './components/home/Home.jsx'
import CategorieInfo from './components/categorieinfo/CategorieInfo.jsx'
import YourDonation from './components/yourdonation/YourDonation.jsx'
import Static from './components/static/Static.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/categorieinfo/:id',
        loader: () => fetch('/data.json'),
        element: <CategorieInfo></CategorieInfo>
      },
      {
        path: '/donation',
        loader: () => fetch('/data.json'),
        element: <YourDonation></YourDonation>
      },
      {
        path:'/static',
        loader: () => fetch('/data.json'),
        element: <Static></Static>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
