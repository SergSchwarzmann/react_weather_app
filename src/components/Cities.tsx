import * as React from 'react';


import "../styles/Cities.css";

import City from './City';
import Interval from './Interval';



function Cities({children}) {
    // let [coords, setCoords] = React.useState();

    let [lat, setLat] = React.useState(0);
    let [lon, setLon] = React.useState(0);

     const RefDataCon = React.createContext({lat, lon})
      

    // let lat = 0;
    // let lon = 0;
    const setCoords = (lat, lon) => {
        setLat(lat);
        setLon(lon);
        
    }
    console.log(lat, lon);

    return (
        <div className="cities">
            This is cities
            <ul>
                <li><button onClick={() => setCoords(lat = 50, lon =70)}>Temirtau</button></li>
                <li><button onClick={() => setCoords(lat = 60, lon = 80)}>Astana</button></li>
                <li><button onClick={() => setCoords(lat = 70, lon = 90)}>Almaty</button></li>
                <li><button onClick={() => setCoords(lat = 90, lon = 100)}>Moscow</button></li>
            </ul>
            <RefDataCon.Provider value={{ lat, lon }}>
            
            </RefDataCon.Provider>
        </div>
    );
};


export default Cities;
