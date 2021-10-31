import React, { useState }  from 'react'
import CounterOne from "./CounterOne";


export default function Sample() {
    const [elem, setelem] = useState(JSON.parse(localStorage.getItem("el")))
    console.log(JSON.parse(localStorage.getItem("el")))

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
        <p>{elem.name}</p>
        <p>{elem.symbol}</p>
        
    </div>
    
    </div>
    <div className="body1">
    <div className="col-8">
        
                        <h1>{elem.symbol}</h1>
                        <h5>{elem.name}</h5>
                        <h1>Boiling point:{elem.boil}</h1>
                    </div>
    <CounterOne upperlimit={elem.boil}/>
            <br/>
            </div>
    </div>
    
    )
}