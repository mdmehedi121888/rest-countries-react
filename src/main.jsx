import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';
import Countries from './components/Countries.jsx';
import CountryDetails from './components/CountryDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'countries',
        element:<Countries></Countries>,
        loader:()=> fetch('https://restcountries.com/v3.1/all'),
      },
      {
        path:'country/:countryId',
        element:<CountryDetails></CountryDetails>,
        loader:({params})=>fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`)
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
