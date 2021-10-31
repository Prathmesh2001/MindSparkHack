import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from "../elementGIF.json"

export default function Element() {

    const [elem, setelem] = useState(JSON.parse(localStorage.getItem("el")))
    console.log(JSON.parse(localStorage.getItem("el")))

    var img = []
    if (data.gif.length >= elem.number && data.gif[elem.number - 1].id == elem.number) {
        img.push(<div className="gif-in-me"><iframe src={data.gif[elem.number - 1].link} frameBorder="0" className="giphy-embed noHover"></iframe></div>)
    }

    return (
        <div className='element-page py-5'>
            <div className="container elementback">
                <div className="card">
                    {img}
                    <div className="card-info card">
                        <div className="info-1 card-head bg-secondary">

                            {/* <span>{elem.number}</span> */}
                            <h2><span className="px-3 bold">{elem.symbol}</span>  -  {elem.name} ({elem.category})</h2>
                           
                        </div>
                        <div className="info-2 card-body">
                        <p>{elem.summary}</p>
                            <h6><b>Appearance:</b> {elem.appearance}</h6>
                            <h6><b>Atomic Mass:</b> {elem.atomic_mass}</h6>
                            <h6><b>Boiling Point:</b> {elem.boil}</h6>
                            <h6><b>Density:</b> {elem.density}</h6>
                            <h6><b>Melting Point:</b> {elem.melt}</h6>
                            <h6><b>Molar Heat:</b> {elem.molar_heat}</h6>
                            <a href={elem.source} target="_blank">Know more about {elem.name}</a>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <div className="two-cards">
                    
                        <div className="card cardwidth">
                            <img src="https://useruploads.socratic.org/Vgf4N1VHQbSqFvO650uQ_photoelectriceffect.png" className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Photoelectric Effect</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/photoelectric" class="btn btn-success form-control">Begin</Link>
                            </div>
                        </div>
                   
                        <div className="card cardwidth">
                            <img src="https://img.favpng.com/7/13/11/boiling-point-melting-point-heat-temperature-chemistry-png-favpng-jmFenJZBfRehxkkAgHRq5Ezr9.jpg" className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Melting and Boiling point of elements</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/sample" class="btn btn-success form-control">Begin</Link>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}
