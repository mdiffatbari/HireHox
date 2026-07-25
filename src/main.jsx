import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes';
import FirebaseAuthContext from './contexts/FirebaseAuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <FirebaseAuthContext>
        <RouterProvider router={router} />
      </FirebaseAuthContext>
  </StrictMode>,
)
