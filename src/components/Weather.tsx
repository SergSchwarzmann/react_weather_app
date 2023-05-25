import * as React from 'react';
import axios from 'axios';

import City from './City';

function Weather ({coords}) {



    return (
        <div>
            From Weather {coords.lat} {coords.lon}
        </div>
        
    )

}

export default Weather;