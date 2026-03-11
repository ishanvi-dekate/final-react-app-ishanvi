import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <script type="text/javascript" src="script.js"></script>
    <main>
        <body>
            <h1>Osteoporosis</h1>
            <p>This website is all about the bone disease: osteoporosis.</p>
        </body>
        <section>
            <h3>What is Osteoporosis?</h3>
            <p>Osteoporosis is a disease in which a person's bone mass and density decreases, making bones weak and fragile. People with osteoporosis are more prone to fractures from minor falls and daily activities versus people without the disease.</p>
        </section>
        <section>
            <h3>Who can get it?</h3>
            <p>Osteoporosis can affect anyone. People more at risk include women over the age of 65 and men over 70. Postmenopausal women are more at risk due to decreasing estrogen levels. Men wih low testosterone levels are also at increased risk of osteoporosis.</p>
        </section>

        <h4>Now lets go into te specifics of the disease and what someone can do to prevent it.</h4>

        <button onclick="myFunction()">Click Me for More Links</button>

        <div id="myDIV">
            <ul>
                <li><a href="https://www.mayoclinic.org/diseases-conditions/osteoporosis/symptoms-causes/syc-20351968">Mayo Clinic</a></li>
                <li><a href="https://my.clevelandclinic.org/health/diseases/4443-osteoporosis">Cleveland Clinic</a></li>
                <li><a href="https://medlineplus.gov/osteoporosis.html">Medline Plus</a></li>
                <li><a href="https://www.niams.nih.gov/health-topics/osteoporosis">National Institute of Arthritis and Muscoloskeletal and Skin Diseases</a></li>
                <li><a href="https://www.bonehealthandosteoporosis.org/patients/what-is-osteoporosis/">Bone Health and Osteoporosis Foundation</a></li>
                <li><a href="https://www.fda.gov/consumers/womens-health-topics/osteoporosis">US Food and Drug Administration</a></li>
            </ul>
        </div>
    </main>
    </>
  )
}

export default App
