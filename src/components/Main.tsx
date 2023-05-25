import * as React from 'react';
import axios from 'axios';

import "../styles/Main.css";

import Interval from "./Interval";



function Main (props) {
    let [lat, setLat] = React.useState(0);
    let [lon, setLon] = React.useState(0);
    // let [coords, setCoords] = React.useState({lat:0, lon:0});
     
    // const setCoords = (lat, lon) => {
    //     setLat(lat);
    //     setLon(lon);
    // }
    // let lat = 0;
    // let lon = 0;
    // console.log(coords);

    let [weather, setWeather] = React.useState([]);

    let apiKey = "af9e862c1cd391096bdd3b21e57ecbd7"

    function askWeather (lat, lon) {
    
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units={metric}&appid=${apiKey}`).then(res => {
        // console.log(res);
        setWeather(res.data);
        console.log(weather);
    });
}
    
    return (
        <main >
            <div className="main-text">This is main</div>
            <div className="grid-item-container">
                <div >
                    <Interval />
                </div>
                <div className="cities">
                    This is cities
                    <ul>
                        <li><button onClick={() => askWeather(lat = 50, lon = 72.9)}>Temirtau</button></li>
                        <li><button onClick={() => askWeather(lat = 60, lon = 80)}>Astana</button></li>
                        <li><button onClick={() => askWeather(lat = 70, lon = 90)}>Almaty</button></li>
                        <li><button onClick={() => askWeather(lat = 90, lon = 100)}>Moscow</button></li>
                    </ul>
                </div>
            </div>
        </main>
    )
};


export default Main;