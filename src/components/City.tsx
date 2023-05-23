import * as React from 'react';
import axios from 'axios';



function City (lat, lon) {
    const [cities, setCity] = React.useState([]);

    let apiKey = "af9e862c1cd391096bdd3b21e57ecbd7"

    React.useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units={metric}&appid=${apiKey}`).then(res => {
        console.log(res);
        setCity(res.data);
    });
}, []);
}


export default City;