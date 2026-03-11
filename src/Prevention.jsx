import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Prevention() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
        <body>
            <h3>Prevention</h3>
        </body>
        <section>
            <p>Some ways to reduce the risks of osteoporosis and to prevent getting it include: 
            <ul>
                <li>Plenty of exercise</li>
                <li>A bone healthy diet including calcium and protien</li>
                <li>Getting enough vitamin D</li>
                <li>Maintaining a healthy body weight</li>
                <li>Avoid smoking and heavy drinking</li>
            </ul>
            </p>
        </section>
        <section>
            <h3>Treatments</h3>
            <p>After taking certain tests, doctors can figure out if a person has osteoporosis based on their DEXA bone density test and you Fracture Risk Assessment Tool (FRAX) score. Based on your risk of breaking a bone in 10 years, a doctor will decide to either give medication or if lifestyle changes are enough to prevent and treat the warning signs. Some medicines doctors may choose to give are: 
                <ul>
                    <li>Bisphosphonates</li>
                    <li>Denosumab</li>
                    <li>Hormone-related Therapy</li>
                    <li>Bone-building medicines</li>
                </ul>

            </p>
        </section>
    </main>
    </>
  )
}

export default Prevention