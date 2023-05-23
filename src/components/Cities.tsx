import * as React from 'react';
import axios from 'axios';

import "../styles/Cities.css";

import City from './City';

function Cities(props) {

    const askWeather = (lat, lon) => {
        City(lat, lon)
    }

    return (
        <div className="cities">
            This is cities
            <ul>
                <li><button onClick={() => askWeather(50, 70)}>Temirtau</button></li>
                <li><button>Astana</button></li>
                <li><button>Almaty</button></li>
                <li><button>Moscow</button></li>
            </ul>
        </div>
    );
};


export default Cities;