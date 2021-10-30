import React, { useState } from 'react'

export default function Element() {

    const [elem, setelem] = useState(JSON.parse(localStorage.getItem("el")))
    // console.log(JSON.parse(localStorage.getItem("el")))

    return (
        <div>
            <div className="container">
                <h1 className="text-center">{elem.name}</h1>
                <iframe src="https://giphy.com/embed/ZZqrogB7mIcppuwJc7" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ZZqrogB7mIcppuwJc7">via GIPHY</a></p>
                <div className="row d-flex justify-content-spacebetween">
                    <div className="col-6">
                        <div className="card cardwidth">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div class ="card-body">
                            <h5 class ="card-title">Card title</h5>
                            <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" class ="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card cardwidth">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div class ="card-body">
                            <h5 class ="card-title">Card title</h5>
                            <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class ="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
