import React, { useState, useEffect } from "react";

const CountryQuiz = ({countryList, getCountry, setCountryInfo}) => {

    const [quizList, setQuizList] = useState(countryList.slice().sort(() => Math.random() - 0.5))
    const [formData, setFormData] = useState({})
    const [message, setMessage] = useState("");

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
        checkAnswer(formData.answer, event)
        console.log('Event: ', event);
    }

    const checkAnswer = (answer, event) => {

        if (quizList){
            if (quizList[quizList.length - 1] === answer){
                setMessage("Correct!")
                quizList.pop()
                getCountry(quizList[quizList.length - 1])
                .then(result => setCountryInfo(result));
                event.target[0].value = ""
            } else {
                setMessage("That's not right - try again?")
            }
        }
    }

    

    return (
        <>
        <form onSubmit={onSubmit}>
            <input type="text" id="answer" onChange={handleChange}/>
            <input type="submit"/>
        </form>
        <p>Answer {message}</p>
        </>
    )
}

export default CountryQuiz;