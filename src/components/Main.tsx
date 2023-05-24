import * as React from 'react';

import "../styles/Main.css";

import Interval from "./Interval";



function Main (props) {
    // let [lat, setLat] = React.useState(0);
    // let [lon, setLon] = React.useState(0);
    let [coords, setCoords] = React.useState({lat:0, lon:0});
     
    // const setCoords = (lat, lon) => {
    //     setLat(lat);
    //     setLon(lon);
    // }
    console.log(coords);
    
    return (
        <main >
            <div className="main-text">This is main</div>
            <div className="grid-item-container">
                <div >
                    <Interval coords={coords}/>
                </div>
                <div className="cities">
                    This is cities
                    <ul>
                        <li><button onClick={() => setCoords({lat: 50, lon: 70})}>Temirtau</button></li>
                        <li><button onClick={() => setCoords({lat: 60, lon: 80})}>Astana</button></li>
                        <li><button onClick={() => setCoords({lat: 70, lon: 90})}>Almaty</button></li>
                        <li><button onClick={() => setCoords({lat: 90, lon: 100})}>Moscow</button></li>
                    </ul>
                </div>
            </div>
        </main>
    )
};


export default Main;