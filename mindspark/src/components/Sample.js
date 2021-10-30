import React from 'react'
import data from "../PeriodicTableJSON.json"
import CounterOne from "./CounterOne";

export default function Sample() {
    return (
        <div>

            <div className="body">

                <div className="wrapper center-object-vertical">
                    <div className="flame-wrapper">
                        <div className="flame red"></div>
                        <div className="flame orange"></div>
                        <div className="flame gold"></div>
                        <div className="flame white"></div>
                        <div className="base blue"></div>
                        <div className="base black"></div>
                    </div>
                </div>
                {/* <div className="box-container center-object-vertical my-5">
                    <div className="cup"> </div>
                    <div className="flask">
                        <img src="/static/images/boiling-water.gif" alt="round flask" />
                    </div>
                    <div className="fire-img">
                        <img src="/static/images/fire.gif" alt="blue fire" />
                    </div>

                </div> */}

            </div>
            <div className="cup">
            </div>

            <div className="body1"><CounterOne /><br /></div>
        </div>

    )
}