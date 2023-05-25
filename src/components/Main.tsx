import * as React from 'react';

import "../styles/Main.css";

import Cities from './Cities';
import Weather from './Weather';



function Main () {

    const [latitude, setLatitude] = React.useState(null);
    const [longitude, setLongitude] = React.useState(null);

    const handleCitySelect = (selectedLatitude, selectedLongitude) => {
    setLatitude(selectedLatitude);
    setLongitude(selectedLongitude);
    };

    return (
        <main >
            <Cities onCitySelect={handleCitySelect}/>
            <Weather latitude={latitude} longitude={longitude}/>
        </main>
    )
};


export default Main;