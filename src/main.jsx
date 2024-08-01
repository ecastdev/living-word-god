import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App.jsx';
import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import About1 from './components/about/about11.jsx';
import Contact from './components/contact/contact.jsx';
import Service from './components/service/service.jsx';
import Donate from './components/donate.js/donate.jsx';
import Volunt from './components/voulunt/volunt.jsx';
import App2 from './app2.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[900],
    },
  },
});
const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    // errorElement:<ErrorPage/>,
    children : [
      {
        path: '',
        element : <App2/>
      },

      {
        path: 'about',
        element : <About1/>
      },
      {
        path: 'contact',
        element : <Contact/>
      },
      {
        path: 'service',
        element : <Service/>
      },
      {
        path: 'donate',
        element : <Donate/>
      },
      {
        path: 'volunteer',
        element : <Volunt/>
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
