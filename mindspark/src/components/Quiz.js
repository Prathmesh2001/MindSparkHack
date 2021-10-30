import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import { useSpring, animated } from 'react-spring'
function Quiz(props) {
    const {name} = useParams();
    const myQuiz = [9, 10, 11, 14, 15];
    const handle_click=()=>{

    }
    return (
        <div className="container-fluid">
            {
                myQuiz.map((elem) => {
                    console.log(elem)
                    return (
                        <Link className="Quizland m-5" to={"/quizcont/" + elem}></Link>
                    )
                }
                )
            }
           
        </div>
    )
}

export default Quiz
