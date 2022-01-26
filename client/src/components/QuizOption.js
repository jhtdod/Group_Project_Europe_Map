import React from "react";

const QuizOption = ({answerName, handleClick}) => {

    return(
        <>
            <button onClick={handleClick}>
                {answerName}
            </button>
        </>
    )
}


export default QuizOption;