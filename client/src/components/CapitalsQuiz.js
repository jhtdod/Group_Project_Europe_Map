import React from "react";
import QuizOption from "./QuizOption";

const CapitalsQuiz = ({newQuestion}) => {
    return(
        <>
            <div id="question-container">
                <div id="header">
                    <div id="question">Question</div>
                    <div id="score-container">Score</div>
                </div>
                <div id="answer-options">
                    <QuizOption/>
                </div>
            </div>
        </>
    )
}

export default CapitalsQuiz;