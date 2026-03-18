import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GoogleLogin from './Google.jsx'
import './Footer.css'

function Footer() {


    return (
        <div>
            <footer>
                <p>&copy;2026 Dekate Inc.</p>
                <GoogleLogin />
            </footer>
        </div>

    )
}

export default Footer