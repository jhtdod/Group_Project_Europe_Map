import React, { useState } from "react";
import "./CountryCard.css"
import "../containers/MapContainer.css"
import {Card, CloseButton} from 'react-bootstrap';

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
            <Card  text="light" bg="dark" border="dark" style={{width: '100%', height: '100%'}}>
                <CloseButton variant="white" onClick={resetQuiz} aria-label="hide"/>
                    <Card.Body>
                    <Card.Title as='h4'>Can you name the countries?</Card.Title>
                                    <Card.Text>
                                    <p onClick={startQuiz}>Click me to start</p>
                                    <form onSubmit={onSubmit}>
                                        <input type="text" id="answer" onChange={handleChange}/>
                                        <input type="submit"/>
                                    </form>
                                    <p>{message} {score}/46</p>
                                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    
}

export default CountryQuiz;