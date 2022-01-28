import React from "react";

const QuizOption = ({answerName, handleClick}) => {

    return(
        <>
        <li>
            <button onClick={handleClick}>{answerName}</button>
        </li>
        </>
    )
}

export default QuizOption;