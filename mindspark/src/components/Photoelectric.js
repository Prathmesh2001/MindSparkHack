import React, { useState } from 'react'


export default function Photoelectric() {

    const h = 6.626 ** 10 - 34;
    const [freq, setfreq] = useState(0)
    const [output, setoutput] = useState([])

    const calKE = () => {
        let k = h * freq - h * 5;
        setoutput([<div>KE = hv - hv<sub>0</sub></div>, <div>KE = 6.626 x 10<sup>-34</sup> x {freq} - 6.626 x 10<sup>-34</sup> x 5</div>, <div>KE = {k} J</div>])
        // output.push(<div>KE = hv - hv<sub>0</sub></div>);
        // output.push(<div>KE = 6.626 x 10<sup>-34</sup>x{freq} - 6.626 x 10<sup>-34</sup>x5</div>)
        // output.push(<div>KE = {KE}</div>)
        // console.log(output)
    }



    var electrons = [];
    for (var i = 1; i <= 45; i++) {
        electrons.push(<div className="electrons my-3 mx-3" id={i}>e</div>);
    }


    return (
        <div className="photo-electric-page">

            <div className='container photo-electric py-3'>
                <h1 className="text-center py-2">Photoelectric Effect</h1>
                <div className="row my-3 photorow">
                    <div className="col-4 photocol p-3">
                        <h4 className="text-center">Einstiens Photoelectric Equation</h4><hr />
                        <h5 className="text-center">K.E=hv-hv<sub>0</sub></h5>
                        <h6 className="text-center">Planck's constant(h) = 6.626 x 10<sup>-34</sup> J Hz<sup>-1</sup></h6>
                        <br />
                        {/* <h6 className="text-center">Input</h6> */}
                        <div className="mb-3">
                            <label htmlFor="freqinpt" className="form-label">Frequency(Hz):</label>
                            <div className="row mx-2">

                                <input type="number" className="col-8" id="freqinpt" value={freq} onChange={e => setfreq(e.target.value)} />
                                <button className="btn btn-success col-4" onClick={calKE}>Submit</button>
                            </div>
                        </div>
                        <br />
                        <h6 className="text-center">Output</h6>
                        <div className="output">
                            {output}
                        </div>
                    </div>
                    <div className="col-8 photocol">
                        <div className="rays">

                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="arrowup1 bi bi-arrow-down-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="arrowup2 bi bi-arrow-down-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="arrowup3 bi bi-arrow-down-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="arrowdown1 bi bi-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="arrowdown2 bi bi-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="arrowdown3 bi bi-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                            </svg>
                        </div>
                        <div className="electron_element">
                            {electrons}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
