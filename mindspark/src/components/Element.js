import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Element() {

    const [elem, setelem] = useState(JSON.parse(localStorage.getItem("el")))
    console.log(JSON.parse(localStorage.getItem("el")))

    return (
        <div>
            <div className="container">
                <div className="row my-3">
                    <div className="col-4">
                        <iframe src="https://giphy.com/embed/ZZqrogB7mIcppuwJc7" width="480" height="480" frameBorder="0" className="giphy-embed noHover" allowFullScreen></iframe>
                    </div>
                    <div className="col-8">
                        <h1>{elem.symbol}</h1>
                        <h5>{elem.name}</h5>
                        
                    </div>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col-4">
                        <div className="card cardwidth">
                            <img src="https://www.scienceabc.com/wp-content/uploads/ext-www.scienceabc.com/wp-content/uploads/2017/05/Photoelectric-Effect.jpg-.jpg" className="card-img-top" alt="..."/>
                            <div class ="card-body">
                            <h5 class ="card-title">Photoelectric Effect</h5>
                            <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/photoelectric" class ="btn btn-primary">Begin</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card cardwidth">
                            <img src="https://cdn1.byjus.com/wp-content/uploads/2016/01/Melting-and-Boiling-Point2.png" className="card-img-top" alt="..."/>
                            <div class ="card-body">
                            <h5 class ="card-title">Melting and Boiling point of elements</h5>
                            <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/sample" class ="btn btn-primary">Begin</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
