import * as React from 'react';
import axios from 'axios';

import "../styles/Cities.css";

import City from './City';

function Cities(props) {

    const askWeather = (props:{lat, lon}) => {
        City(props)
    }

    return (
        <div className="cities">
            This is cities
            <ul>
                <li><button onClick={askWeather()}>Temirtau</button></li>
                <li><button>Astana</button></li>
                <li><button>Almaty</button></li>
                <li><button>Moscow</button></li>
            </ul>
        </div>
    );
};


export default Cities;