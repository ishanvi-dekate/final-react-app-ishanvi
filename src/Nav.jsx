import './Nav.css'

function Nav({ setPage }){
    return (
        <>
        <div id="navbar">
            <ul>
                <li onClick={() => setPage("home")}>Home</li>
                <li onClick={() => setPage("symptoms")}>Symptoms</li>
                <li onClick={() => setPage("prevention")}>Prevention</li>
            </ul>
        </div>
        </>
    )
}

export default Nav