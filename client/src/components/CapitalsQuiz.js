import React from "react";
import QuizOption from "./QuizOption";

const CapitalsQuiz = ({newQuestion}) => {

    const [answered, setAnswered] = useState(false)
    const [correctAnser, setCorrectAnswer] = useState("")

    const handleClick = () => {
        setAnswered(true)
    }

    const optionList = newQuestion.answers.map((answer, index) => {
        return <QuizOption answer={answer} key={index} onClick={handleClick}/>
    })

    return(
        <>
            <div id="question-container">
                <div id="header">
                    <div id="question">{newQuestion.question}</div>
                    <div id="score-container">Score</div>
                </div>
                <div id="answer-options">
                
                    {optionList}
                </div>
            </div>
        </>
    )
}

export default CapitalsQuiz;