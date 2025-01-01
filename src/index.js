import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './Pages/Home/Home';
import Planets from './Pages/Planets/Planets';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/planets",
    element : <Planets/>
  },
  {
    path : "/about",
    element : <About/>
  },
  {
    path : "/contact",
    element : <Contacts/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
