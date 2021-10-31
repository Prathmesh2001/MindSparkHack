import React from 'react'
import { Link} from 'react-router-dom'
// import { useSpring, animated } from 'react-spring'
function Quiz() {
    const myQuiz = [9, 10, 11, 14, 15];
    const p_style ={
        width:"80px",
        height:"80px",
        backgroundColor: "aquamarine",
        border: "solid black",
        borderRadius: "50%",
    }
    return (
        <div className="container-fluid">
            {
                myQuiz.map((elem) => {
                    console.log(elem)
                    return (
                        <div className="Quizland">
                            <Link className="m-5" to={"/quizcont/" + elem}></Link>
                        </div>
                    )
                }
                )
            }
           
        </div>
    )
}

export default Quiz
