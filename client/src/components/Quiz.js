import React, { useState } from "react";
import QuizOption from "./QuizOption";

const Quiz = ({newQuestion, correctAnswer, setHasAnswered, hasAnswered, score, setScore}) => {

    const [correctText, setCorrectText] = useState("")

    const handleClick = (event) => {
        setHasAnswered(true);
        if (event.target.textContent === correctAnswer) {
            setScore(score => score + 1);
            setCorrectText("Correct!");
        } else {
            setCorrectText("Wrong.");
        }
    }

    const optionList = newQuestion.answers.map((answer, index) => {
        const answerName = answer.text;
        return <QuizOption answerName={answerName} key={index} handleClick={handleClick}/>
    })

    return (
        <>
        <div id="question-container">
            <div id="header">
                <div id="question-flag"><img src={newQuestion.flag}></img></div>
                <div id="question">{newQuestion.question}</div>
                <div id="score-container">Score: {score}</div>
            </div>
            <div id="answer-options">
                {hasAnswered ? 
                    <div className="question-answered">
                        <h5>{correctText}</h5>
                        <p>The answer was {correctAnswer}</p>
                    </div> :
                    <ul>{optionList}</ul>
                }
            </div>
        </div>
        </>
    )
}

export default Quiz;

// hello 