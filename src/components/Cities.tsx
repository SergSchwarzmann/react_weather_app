import * as React from 'react';
import axios from 'axios';

import "../styles/Cities.css";

import City from './City';

function Cities() {
    let [coords, setCoords] = React.useState();

    let lat = 0;
    let lon = 0;
    const askWeather = (coords) => {
        setCoords(coords);
        console.log(coords);
    }

    return (
        <div className="cities">
            This is cities
            <ul>
                <li><button onClick={() => askWeather({lat: 50, lon:70})}>Temirtau</button></li>
                <li><button>Astana</button></li>
                <li><button>Almaty</button></li>
                <li><button>Moscow</button></li>
            </ul>
        </div>
    );
};


export default Cities;