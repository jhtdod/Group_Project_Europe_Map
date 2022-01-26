import React, { useState } from "react";
import "./CountryCard.css"

const CountryQuiz = ({countryList, getCountry, handleClose, setQuizInfo, setShowQuiz}) => {

    const [quizList, setQuizList] = useState(countryList.slice().sort(() => Math.random() - 0.5));
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");
    const [score, setScore] = useState(0);

    const handleChange = (event) =>{
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        checkAnswer(formData.answer.trim(), event);
    }

    const startQuiz = () => {
        getCountry(quizList[quizList.length - 1])
        .then(result => setQuizInfo(result));
    }

    const resetQuiz = () => {
        setScore(0)
        setMessage("")
        setQuizInfo(null)
        handleClose()
        setQuizList(countryList.slice().sort(() => Math.random() - 0.5))
        setShowQuiz(false)
    }

    const checkAnswer = (answer, event) => {
        const correctAnswer = () => {
            setMessage("Correct!");
            quizList.pop();
            event.target[0].value = "";
            setScore(score + 1);
        }

        const wrongAnswer = () => {
            setMessage("That's not right - try again?")
        }

        switch (quizList.length) {
            case 0:
                break;
            case 1:
                if ((quizList[0]).toUpperCase() === answer.toUpperCase()){
                    correctAnswer()
                    setMessage("Wow! You named every country in Europe!")
                    setQuizInfo(null)
                } else {
                    wrongAnswer()
                }
                break;
            default:
                if ((quizList[quizList.length - 1]).toUpperCase() === answer.toUpperCase()){
                    correctAnswer()
                    getCountry(quizList[quizList.length - 1])
                    .then(result => setQuizInfo(result));
                } else {
                    wrongAnswer()
                }
        }
    }

        return (
            <div className="country-quiz">
            <h5>Can you name the countries?</h5>
            <p onClick={startQuiz}>Click me to start</p>
            <p onClick={resetQuiz}>--Close--</p>
            <form onSubmit={onSubmit}>
                <input type="text" id="answer" onChange={handleChange}/>
                <input type="submit"/>
            </form>
            <p>{message} {score}/46</p>
            </div>
        )
    
}

export default CountryQuiz;