import * as React from 'react';
import axios from 'axios';

// import Cities from './Cities';


function City (props) {
    const [cities, setCity] = React.useState([]);

    


    return (
        <div>
            { props.lat }
        </div>
    )
}


export default City;