import React from 'react'
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime
function Atoms() {

    let animation = anime.timeline({
        targets: '.rot',
        rotate: [0, 360],
        // borderRadius: 50,
        duration: 5000,
        easing: 'linear',
        // direction: 'alternate',
        loop: true,
        round: 2
    })
    .add(
    {
        targets: ".track",
        rotate : [0, 360],
        // duration: 5000,
        // translateX: 200
    },
    0
    )
    return (
        <div>
           <div className="main_div">
           <div className="track" id="out1">
                <div className="obj"></div>
            </div>
            
            <div className="track" id="out2">
                <div className="obj"></div>
            </div>
            </div> 
        </div>
    )
}

export default Atoms
