import React from 'react'
import data from "../PeriodicTableJSON.json"

export default function Sample() {
    return (
        <div class="grid-container py-5">
            <h3>Boiling</h3>
            {/* <div class="wrapper">
        <div class="flame-wrapper">
            <div class="flame red"></div>
            <div class="flame orange"></div>
            <div class="flame gold"></div>
            <div class="flame white"></div>
            <div class="base blue"></div>
            <div class="base black"></div>
        </div>
        </div> */}
            <div className="box-container center-object-vertical my-5">
                {/* <div class="cup"> </div> */}
                <div className="flask">
                    <img src="/static/images/boiling-water.gif" alt="round flask" />
                </div>
                <div className="fire-img">
                    <img src="/static/images/fire.gif" alt="blue fire" />
                </div>

            </div>

        </div>

    )
}