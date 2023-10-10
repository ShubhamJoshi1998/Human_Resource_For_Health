import React from 'react'
import { useNavigate } from 'react-router-dom'
import Kpi from './KPI/kpi';
import Map from './Map/Map';
import Graph1 from './GrpahContainer/Graph1';
import Graph2 from './GrpahContainer/Graph2';
import Graph3 from './GrpahContainer/Graph3';
import Graph4 from './GrpahContainer/Graph4';

function AppLayout() {
    const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate('/dummy');
    // };
    return (
        <div>
            <header className="App-header">
                <>

                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="style.css" />
                    <title>Browser</title>
                    <div className="container">
                        <header className="header">
                            {/* Header content goes here */}
                            <h1>Dashboard</h1>
                        </header>
                        <div className="main-content">
                            <div className="column">
                                {/* First column with 8 containers */}
                                <Kpi />
                            </div>
                            <div className="column">
                                {/* Second column with a single container */}
                                <Map />
                            </div>
                            <div className="column">
                                {/* Third column with two containers */}
                                <Graph1 />
                                <Graph2 />
                            </div>
                            <div className="column">
                                {/* Fourth column with two containers */}
                                <Graph3 />
                                <Graph4 />
                            </div>
                        </div>
                        <footer className="footer">
                            {/* Footer content goes here */}
                            <p>Footer</p>
                        </footer>
                    </div>

                </>


            </header>
        </div>
    );
}

export default AppLayout