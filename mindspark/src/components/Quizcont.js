import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import qdata from "../QuestionSamp.json"
function Quizcont() {
    const { id } = useParams();
    const [data, setdata] = useState([]);
    const [qnum, setqnum] = useState(0);
    const [score, setscore] = useState(0);
    let nextbtn;
    useEffect(() => {
        const fun = async () => {
            console.log(id);
            fetch(`https://opentdb.com/api.php?amount=10&category=${id}`, {
                method: 'GET',
                mode: 'cors',
                headers: {}
            })
                .then(resp => resp.json()).then(resp => setdata(resp)).then(error => console.log(error))
        }
        fun()
    }, [])



    const check_Ans = (e, ans) => {
        //   let opt0 = document.getElementById(opt)
        if (ans === qdata[qnum].correct) {
            setscore(score + 1);
            console.log("opt" + qdata[qnum].correct)
            document.getElementById("opt" + qdata[qnum].correct).classList.add('btn-success')
            document.getElementById("opt" + qdata[qnum].correct).classList.remove('btn-primary')
        }
        else {
            document.getElementById("opt" + ans).classList.add("btn-danger")
            document.getElementById("opt" + ans).classList.remove('btn-primary')
            document.getElementById("opt" + qdata[qnum].correct).classList.add('btn-success')
            document.getElementById("opt" + qdata[qnum].correct).classList.remove('btn-primary')
        }
        document.getElementById("opt" + 0).disabled = true

        // document.getElementById("opt"+0).setAttribute("aria-disabled", "true");
        document.getElementById("opt" + 1).disabled = true
        document.getElementById("opt" + 2).disabled = true
        document.getElementById("opt" + 3).disabled = true
    }
    const next_click = () => {
        document.getElementById("opt" + 0).disabled = false
        document.getElementById("opt" + 1).disabled = false
        document.getElementById("opt" + 2).disabled = false
        document.getElementById("opt" + 3).disabled = false
        document.getElementById("opt" + 0).className = "btn btn-primary my-2"
        document.getElementById("opt" + 1).className = "btn btn-primary my-2"
        document.getElementById("opt" + 2).className = "btn btn-primary my-2"
        document.getElementById("opt" + 3).className = "btn btn-primary my-2"
        setqnum(qnum + 1);




    }


    const q_card = (
        <div className="card">
            <h5 className="card-header">Quiz</h5>
            <div className="card-body">
                <h5 className="card-title m-2">{qdata[qnum].que}</h5>
                <div className="d-flex flex-column justify-content-center flex-wrap my-3">

                    <button onClick={(e) => check_Ans(e, 0)} id="opt0" className="btn btn-primary my-2">
                        {qdata[qnum].options[0]}
                    </button>
                    <button onClick={(e) => check_Ans(e, 1)} id="opt1" className="btn btn-primary my-2">
                        {qdata[qnum].options[1]}
                    </button>
                    <button onClick={(e) => check_Ans(e, 2)} id="opt2" className="btn btn-primary my-2">
                        {qdata[qnum].options[2]}
                    </button>
                    <button onClick={(e) => check_Ans(e, 3)} id="opt3" className="btn btn-primary my-2">
                        {qdata[qnum].options[3]}
                    </button>
                </div>

            </div>
            <div className="card-footer d-flex justify-content-between">
                <p className="text-center my-0">{qnum} of 10 Questions</p>
                {/* {if (qnum!=10){
                return ()
            }} */}
                <button onClick={next_click} className="btn btn-primary btn-sm">
                    {qnum == 10 ? "finish test" : "next"}
                </button>
            </div>
        </div>
    
    )

  const res_card = (
      <div className="card text-center">
        <div className="card-body">
            <h5 className="card-title">You've completed the Quiz!</h5>
            <p className="card-text">You got, {score} out of 10</p>
            <Link className="btn btn-primary" to="/">Home</Link>
        </div>
        </div>
    )



    return (
        <div className="quiz-question-page">

            <div className="position-absolute top-50 start-50 translate-middle">
                {qnum > 9 ? res_card : q_card}

            </div>
        </div>
    );
}

export default Quizcont;
