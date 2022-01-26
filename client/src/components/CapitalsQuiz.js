import React, {useEffect, useState} from "react";
import QuizOption from "./QuizOption";

const CapitalsQuiz = ({newQuestion, correctAnswer}) => {

    const [hasAnswered, setHasAnswered] = useState(false)
    const [score, setScore] = useState(0)
    const [correctText, setCorrectText] = useState("")

    const handleClick = () => {
        setHasAnswered(true);
        console.log(event.target.textContent)
        console.log(correctAnswer)
        if (event.target.textContent === correctAnswer) {
            setScore(score => score + 1);
            setCorrectText("Correct!")
        } else {
            setCorrectText("Wrong.")
        }
    }

    const optionList = newQuestion[0].answers.map((answer, index) => {
        const answerName = answer.text
        return <QuizOption answerName={answerName} key={index} handleClick={handleClick}/>
    })

    return(
        <>
            <div id="question-container">
                <div id="header">
                    <div id="question">{newQuestion[0].question}</div>
                    <div id="score-container">Score: {score}</div>
                </div>
                <div id="answer-options">
                {hasAnswered ? 
                    <div className="question-answered">
                        <h5>{correctText}</h5>
                        The answer was {correctAnswer}
                    </div> :
                    <ul>{optionList}</ul>
                    }
                </div>
            </div>
        </>
    )
}

export default CapitalsQuiz;