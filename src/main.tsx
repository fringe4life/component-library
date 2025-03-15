import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root');

if(!root){
  throw new Error('No root element found');  // Handle the case when the root element is not found in the DOM.
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
