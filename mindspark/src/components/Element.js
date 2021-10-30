import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from "../elementGIF.json"

export default function Element() {

    const [elem, setelem] = useState(JSON.parse(localStorage.getItem("el")))
    console.log(JSON.parse(localStorage.getItem("el")))

    var img=[]
    if(data.gif.length>=elem.number&&data.gif[elem.number-1].id==elem.number)
    {
        img.push(<div className="col-4"><iframe src={data.gif[elem.number-1].link} frameBorder="0" className="giphy-embed noHover" allowFullScreen></iframe></div>)
    }

    return (
        <div>
            <div className="container elementback">
                <div className="row my-3">
                    {img}
                    <div className="col-8">
                        <h5>{elem.number}</h5>
                        <h1>{elem.symbol}</h1>
                        <h5>{elem.name}</h5>
                        <h6>{elem.category}</h6>
                        <a href={elem.source} target="_blank">{elem.name} element Page</a>
                        <p>{elem.summary}</p>
                        <h6><b>Appearance:</b> {elem.appearance}</h6>
                        <h6><b>Atomic Mass:</b> {elem.atomic_mass}</h6>
                        <h6><b>Boiling Point:</b> {elem.boil}</h6>
                        <h6><b>Density:</b> {elem.density}</h6>
                        <h6><b>Melting Point:</b> {elem.melt}</h6>
                        <h6><b>Molar Heat:</b> {elem.molar_heat}</h6>
                    </div>
                </div>
                <br />
                <hr />
                <div className="row my-3 d-flex justify-content-center">
                    <div className="col-4">
                        <div className="card cardwidth">
                            <img src="https://useruploads.socratic.org/Vgf4N1VHQbSqFvO650uQ_photoelectriceffect.png" className="card-img-top" alt="..."/>
                            <div class ="card-body">
                            <h5 class ="card-title">Photoelectric Effect</h5>
                            <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/photoelectric" class ="btn btn-primary">Begin</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card cardwidth">
                            <img src="https://img.favpng.com/7/13/11/boiling-point-melting-point-heat-temperature-chemistry-png-favpng-jmFenJZBfRehxkkAgHRq5Ezr9.jpg" className="card-img-top" alt="..."/>
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
