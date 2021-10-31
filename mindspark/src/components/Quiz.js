import React from 'react'
import { Link} from 'react-router-dom'
// import { useSpring, animated } from 'react-spring'
function Quiz() {
    const myQuiz = [0, 1, 2, 3, 4];
    const p_style ={
        width:"80px",
        height:"80px",
        backgroundColor: "aquamarine",
        border: "solid black",
        borderRadius: "50%",
    }
    return (
        <div className="container-fluid abc">
            <div className="m-3">

                <img src="/static/images/empislnd.png" style={{position:"absolute", zIndex:"-100", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}} className="w-50"/>
                <img src="/static/images/path3.png" style={{position:"absolute", zIndex:"-10", top:"50%", left:"50%", width:"700px", transform:"translate(-50%, -50%)"}}/>
                {
                    myQuiz.map((elem) => {
                        console.log(elem)
                        return (
                            <div className="Quizland" id={"qtype" + elem}>
                                <Link to={"/quizcont/" + elem}> <img src="/static/images/circle.png"/></Link>
                            </div>
                        )
                    }
                    )
                }
            </div>
           
        </div>
    )
}

export default Quiz
