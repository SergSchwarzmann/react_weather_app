import * as React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import "../styles/Interval.css";

import Weather from "./Weather";



function Interval({coords}) {
    const [interval, setInterval] = React.useState('one');


    return (
        <div className="interval">
            <div className="radioButtons">
                <p>Set interval</p>
                <Form.Group>
                {/* <label>Set interval</label> */}
                <Form.Radio label="One day" checked={interval === 'one'} value="oneDay" onClick={() => setInterval('one')} />
                <Form.Radio label="Five days" checked={interval === 'five'} value="fiveDays" onClick={() => setInterval('five')} />
                </Form.Group>
            </div>
            <div>
                {interval === 'one' ? "One" : "Five" }
            </div>
            <div>
            </div>
            {coords.lat} {coords.lon}
            <Weather coords={coords}/>
        </div>
    );
};


export default Interval;