import { useState } from 'react'
import './App.css'

function Symptoms() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
        <section>
            <h3>Main Symptoms</h3>
            <p>Major symptoms experienced are: 
                <ul> 
                    <li>Severe back pain</li>
                    <li>Loss of height</li>
                    <li>Stooped posture</li>
                </ul>
                Early indicators could be brittle nails or a weakened grip. Many times, people get fractures in the wrist, hip or spine.</p>
        </section>
        <section>
            <h3>Risk Factors</h3>
            <p>You can't control certain risk factors, including: 
                <ul>
                    <li><b>Sex assigned at birth: </b>Women are much more likely to develop osteoporosis</li>
                    <li><b>Age: </b>As one gets older, they are more likely to get osteoporosis</li>
                    <li><b>Race: </b>People of white or Asian descent are more likely to develop the disease</li>
                    <li><b>Family History: </b>Those with family members, like siblings or parents, who have osteroporosis are more likely to develop osteroporosis</li>
                    <li><b>Body Frame Size: </b>People with smaller frames are more likely to develop the disease as they have less bone in general, causing them to have a lower bone mass and density compared to those with bigger frames</li>
                </ul>

            </p>
        </section>

    </main>
    </>
  )
}

export default Symptoms