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
                                <p className="text-start">Ionic bond, also called electrovalent bond, type of linkage formed from the electrostatic attraction between oppositely charged ions in a chemical compound. Such a bond forms when the valence (outermost) electrons of one atom are transferred permanently to another atom. The atom that loses the electrons becomes a positively charged ion (cation), while the one that gains them becomes a negatively charged ion (anion). A brief treatment of ionic bonds follows. For full treatment, see chemical bonding: The formation of ionic bonds.</p>

                                <p className="text-start">Ionic bonding results in compounds known as ionic, or electrovalent, compounds, which are best exemplified by the compounds formed between nonmetals and the alkali and alkaline-earth metals. In ionic crystalline solids of this kind, the electrostatic forces of attraction between opposite charges and repulsion between similar charges orient the ions in such a manner that every positive ion becomes surrounded by negative ions and vice versa. In short, the ions are so arranged that the positive and negative charges alternate and balance one another, the overall charge of the entire substance being zero. The magnitude of the electrostatic forces in ionic crystals is considerable. Accordingly, these substances tend to be hard and nonvolatile.</p>
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
                                <p className="text-start">covalent bond, in chemistry, the interatomic linkage that results from the sharing of an electron pair between two atoms. The binding arises from the electrostatic attraction of their nuclei for the same electrons. A covalent bond forms when the bonded atoms have a lower total energy than that of widely separated atoms.

                                    A brief treatment of covalent bonds follows. For full treatment, see chemical bonding: Covalent bonds.

                                    Molecules that have covalent linkages include the inorganic substances hydrogen, nitrogen, chlorine, water, and ammonia (H2, N2, Cl2, H2O, NH3) together with all organic compounds. In structural representations of molecules, covalent bonds are indicated by solid lines connecting pairs of atoms; e.g.,</p>
                                <p className="text-start">Covalent bonds are directional, meaning that atoms so bonded prefer specific orientations relative to one another; this in turn gives molecules definite shapes, as in the angular (bent) structure of the H2O molecule.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Bonding
