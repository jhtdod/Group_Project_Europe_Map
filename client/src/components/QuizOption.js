import React from "react";

const QuizOption = ({answer}) => {
    return(
        <>
            <button>
                {answer.text}
            </button>
        </>
    )
}

export default QuizOption;