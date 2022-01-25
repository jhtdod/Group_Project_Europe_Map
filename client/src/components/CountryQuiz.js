import React, { useState, useEffect } from "react";

const CountryQuiz = ({countryList, getCountry, setCountryInfo}) => {

    const [quizList, setQuizList] = useState(countryList.slice().sort(() => Math.random() - 0.5));
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");
    const [score, setScore] = useState(0);

    useEffect(() => {
        getCountry(quizList[quizList.length - 1])
        .then(result => setCountryInfo(result));
    }, [])

    const handleChange = (event) =>{
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        checkAnswer(formData.answer.trim(), event)
    }

    const checkAnswer = (answer, event) => {
        switch (quizList.length) {
            case 0:
                console.log('End of list');
                break;
            case 1:
                if ((quizList[0]).toUpperCase() === answer.toUpperCase()){
                    setMessage("Correct!")
                    quizList.pop()
                    event.target[0].value = ""
                    setScore(score + 1)
                } else {
                    setMessage("That's not right - try again?")
                }
                break;
            default:
                if ((quizList[quizList.length - 1]).toUpperCase() === answer.toUpperCase()){
                    setMessage("Correct!")
                    quizList.pop()
                    getCountry(quizList[quizList.length - 1])
                    .then(result => setCountryInfo(result));
                    event.target[0].value = ""
                    setScore(score + 1)
                } else {
                    setMessage("That's not right - try again?")
                }
        }
        // if (quizList.length > 1){
        //     if ((quizList[quizList.length - 1]).toUpperCase() === answer.toUpperCase()){
        //         setMessage("Correct!")
        //         quizList.pop()
        //         getCountry(quizList[quizList.length - 1])
        //         .then(result => setCountryInfo(result));
        //         event.target[0].value = ""
        //         setScore(score + 1)
        //     } else {
        //         setMessage("That's not right - try again?")
        //     }
        // } 
    }

    

    return (
        <>
        <form onSubmit={onSubmit}>
            <input type="text" id="answer" onChange={handleChange}/>
            <input type="submit"/>
        </form>
        <p>{message} {score}/46</p>
        </>
    )
}

export default CountryQuiz;