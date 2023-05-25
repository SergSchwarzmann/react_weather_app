import * as React from 'react';
import axios from 'axios';

import City from './City';

function Weather ({coords}) {
    const [cities, setCity] = React.useState([]);

    let apiKey = "af9e862c1cd391096bdd3b21e57ecbd7"

    const test = event => {
        console.log('test event');
    }

    React.useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units={metric}&appid=${apiKey}`).then(res => {
        console.log(res);
        setCity(res.data);
        console.log(cities);
    });
}, []);



    return (
        <div>
            From Weather {coords.lat} {coords.lon}
        </div>
        
    )

}

export default Weather;