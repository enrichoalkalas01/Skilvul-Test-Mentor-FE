import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import reportWebVitals from './reportWebVitals'
import Homepages from './components/Homepages'
import Detail from './components/Detail'
import App from './App'

import './assets/css/style.css'

const router = createBrowserRouter([
    { path: "/", element: <Homepages /> },
    { path: "/search", element: <App /> },
    { path: "/detail/:nameDetail", element: <Detail /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <RouterProvider router={ router } />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
