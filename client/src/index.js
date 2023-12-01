import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import SignUp from './views/SignUp/SignUp';
import Login from './views/Login/Login';
import Alltransaction from './views/Alltransactions/Alltransactions'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/app',
    element: <App/>
  },

  {
    path: '/transaction',
    element: <Alltransaction/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/login',
    element: <Login/>
  },
])
root.render( <RouterProvider router={router} />) ;



