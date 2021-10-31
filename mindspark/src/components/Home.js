import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="bg-home">

            <div className='home-page'>
                {/* <div className="home-img">
                <img src="/static/images/bg-chem.png" alt="background image" />
            </div> */}
                <div className="choose">
                    <div className="glass learn">
                        <h3>Learn</h3>
                        <ul className="learn-links">
                            <li><Link to="/periodicTable">Periodic Table</Link></li>
                            {/* <li><Link to="/photoElectric">Photo Electric</Link></li> */}
                            <li><Link to='/bonding'>Chemical Bonding</Link></li>
                            {/* <li><Link to='/Sample'>Boiling</Link></li> */}
                        </ul>
                        <div className="png">
                            <img src="/static/images/learn.png" alt="learn image" />
                        </div>
                    </div>
                    <div className="glass test">
                        <h3>Test</h3>
                        <ul className="learn-links">
                            {/* <li><Link to="/periodicTable">Periodic Table</Link></li> */}
                            <li><Link to='/quiz'>Take Quiz</Link></li>
                            <li><Link to='/#'>Race against Time</Link></li>
                        </ul>
                        <div className="png">
                            <img src="/static/images/test.png" alt="test image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
Home