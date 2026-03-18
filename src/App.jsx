import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Symptoms from './Symptoms.jsx'
import Prevention from './Prevention.jsx'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState("home");

  return (
    <>
        <Nav setPage={setPage} />
        {page === 'home' && <Home />}
        {page === "symptoms" && <Symptoms />}
        {page === "prevention" && <Prevention />}
        <Footer />
    </>
  )
}

export default App
