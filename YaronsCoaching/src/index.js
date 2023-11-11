import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/login';
import Register from './pages/register';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

const basename = '/YaronsCoaching';

const router = createBrowserRouter([
  {path: "/",element: <App/>},
  {path: "/login",element: <Login/>},
  {path: "/register", element: <Register/>},

], {basename})



function redirectToAnchorLink() {
  const path = window.location.pathname;
  if (path === '/about' || path === '/prices' || path === '/contact') {
    window.location = "/#"+path.replace('/', '');
  } 
}
redirectToAnchorLink();

root.render(
  <RouterProvider router={router}/>
);