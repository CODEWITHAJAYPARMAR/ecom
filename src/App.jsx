import React from 'react';
import './App.css';
import AppLayout from './components/Layout/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Country from './pages/Country';
import Contact from './pages/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Errorpage from './pages/Errorpage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'country',
          element: <Country />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
