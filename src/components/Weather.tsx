import * as React from 'react';
import axios from 'axios';

import City from './City';

function Weather () {


    let apiKey = "af9e862c1cd391096bdd3b21e57ecbd7"

    React.useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props[0]}&lon=${props.lon}&units={metric}&appid=${apiKey}`).then(res => {
        console.log(res);
        setCity(res.data);
    });
}, []);



    return (
        
    )

}

export default Weather;