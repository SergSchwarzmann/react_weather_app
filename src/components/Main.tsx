import * as React from 'react';

import "../styles/Main.css";

import Interval from "./Interval";
import Cities from "./Cities";

function Main () {
    return (
        <main>
            <div className="main-text">This is main</div>
            <div className="grid-item-container">
                <Interval />
                <Cities />
            </div>
        </main>
    )
};


export default Main;