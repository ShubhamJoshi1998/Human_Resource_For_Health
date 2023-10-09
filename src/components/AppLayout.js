import React from 'react'
import { useNavigate } from 'react-router-dom'

const AppLayout = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/dummy')
    }
    return (
        <div>
            <header className="App-header">
                <img src={"4BI.gif"} className="App-logo" alt="logo" />
                <p>
                    <b>
                        Human Resource For Health
                    </b>
                </p>
                <button onClick={handleClick}> Click here </button>
            </header>
        </div>
    )
}

export default AppLayout