import React from 'react'

function Bonding() {
    return (
        <div className='bonding-page bg-secondary py-5'>
            <div className="container ">
                <div className="bonding-info-div">


                    <h3 className='card py-3'>  Chemical Bonding</h3>
                    <div className="bonding-types row my-3">
                        <div className='col-6 card'>
                            <div className="card-header">
                                <h4>Ionic Bond</h4>
                            </div>
                            <div className="card-body">
                                {/* <p>NaCl</p> */}
                                {/* <img src="https://24.media.tumblr.com/d1b1721c8afbb4235cfdc70819ff572e/tumblr_muq0m7ysZ01sjwwzso1_500.gif" alt="ionic bond" /> */}
                                <div className="img-container">

                                <img src="https://th.bing.com/th/id/R.502a053c893b2757ea0d570a93be6763?rik=Zw2HbQ4oFvkA7w&riu=http%3a%2f%2fwww.electrical4u.com%2fimages01%2fanimated-nacl.gif&ehk=wrL6ndN1GtVTVnnEjhBrBdkcIcsSf35o7M9oDcJGtMM%3d&risl=&pid=ImgRaw&r=0" alt="ionic bond" />
                                </div>
                            </div>
                        </div>

                        <div className='col-6 card '>
                            <div className="card-header">
                                <h4>Covalent Bond</h4>
                            </div>
                            <div className="card-body">
                                {/* <p>Cl<sub>2</sub></p> */}
                                {/* <img src="https://media.giphy.com/media/11mMlZmTMYkyaI/giphy.gif" alt="covalent bond" /> */}
                                <div className="img-container">

                                <img src="https://qph.fs.quoracdn.net/main-qimg-0902fc5a377dfc989ef998f8965bb585" alt="covalent bond" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Bonding
