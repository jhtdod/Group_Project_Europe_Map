import React, { useState } from "react";

const CountryQuiz = ({countryList}) => {

    const [answer, setAnswer] = useState("");
    const [formData, setFormData] = useState({})

    const handleChange = (event) =>{
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        setAnswer(formData.answer)
    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <input type="text" id="answer" onChange={handleChange}/>
            <input type="submit"/>
        </form>
        </>
    )
}

export default CountryQuiz;