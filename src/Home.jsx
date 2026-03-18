import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'
import myFunction from './script.js'

function Home() {
  const [count, setCount] = useState(0)

  const [apiData1, setApiData1] = useState('');

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setApiData1(data.message); // "message" is the field of the image URL
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  return (
    <>
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

        <h4>Now lets go into the specifics of the disease and what someone can do to prevent it.</h4>

        <myFunction/>
        <button> Below are more link on osteoporosis </button>

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
    <Card name="Times you've been to doctor" description="Change the number to match the amount of times you've visited the doctor" />
    <Card name="Times you've been prescribed medicine" description="Change the number to match the amount of times you've been prescribed medicine" />
    
    <button onClick={fetchDogImage}>Fetch Dog Image</button>
            {apiData1 && <img src={apiData1} alt="Random Dog" />}
    </>
  )
}

export default Home