import React from 'react'
import data from "../PeriodicTableJSON.json"
import CounterOne from "./CounterOne";

export default function Sample() {
    return (
        <div>
        
        <div class="body">

        <div class="wrapper">
        <div class="flame-wrapper">
            <div class="flame red"></div>
            <div class="flame orange"></div>
            <div class="flame gold"></div>
            <div class="flame white"></div>
            <div class="base blue"></div>
            <div class="base black"></div>
        </div>
        </div>
        <div class="cup">
    </div>
    
    </div>
    <div className="body1">
    <CounterOne/>
            <br/>
            </div>
    </div>
    
    )
}