import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
import Symptoms from './Symptoms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <App />
    <Card name="Times you've been to doctor" description="Change the number to match the amount of times you've visited the doctor" />
    <Card name="Times you've been presribed medicine" description="Change the number to match the amount of times you've been prescribed medicine" />
    <Footer />
  </StrictMode>,
) 
