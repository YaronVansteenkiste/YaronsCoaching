import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {path: "/",element: <App/>},

])

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