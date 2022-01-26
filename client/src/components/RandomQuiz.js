import React, { useState } from "react";

const RandomQuiz = ({countryList, getCountry}) => {

    const [question, setQuestion] = useState(null)
    const [correct, setCorrect] = useState("")
    const [quizList, setQuizList] = useState(countryList.slice().sort(() => Math.random() - 0.5))

    const handleClick = () => {

        setCorrect("")

        let countries = quizList.slice(0,3);
        countries.push(quizList[(quizList.length - 1)]);
        
        let data = []

        Promise.all(
            countries.map(country => getCountry(country)
            .then(value => data.push(value))))
            .finally( () => {
                let answer = data[Math.floor(Math.random() * 4)]
                let query = `What is the capital city of ${answer[0].country}?`
                let options = [(data[0][1].capital[0]), (data[1][1].capital[0]), (data[2][1].capital[0]),(data[3][1].capital[0])]

                setQuestion({query: query, answer: answer, options: options})
            })
        }

        const handleAnswerClick = (event) => {

                if (event.target.textContent === question.answer[1].capital[0]){
                    setCorrect("That's right!")
                    let tempList = quizList
                    tempList.splice((tempList.indexOf(question.answer[0].country)), 1)
                    tempList.sort(() => Math.random() - 0.5);
                    setQuizList(tempList)
                } else {
                    setCorrect("Oh dear.")
                }

                console.log(quizList.length);
        }
    
        if (question){
            return (
            <>
                <h6 onClick={handleClick}>Gimme a question! </h6>
                <p>{question.query}</p>
                <ul>
                    <li onClick={handleAnswerClick}>{question.options[0]}</li>
                    <li onClick={handleAnswerClick}>{question.options[1]}</li>
                    <li onClick={handleAnswerClick}>{question.options[2]}</li>
                    <li onClick={handleAnswerClick}>{question.options[3]}</li>
                </ul>
                <p>{correct}</p>
            </>
            )
        }
        return (<h6 onClick={handleClick}>Gimme a question! </h6>)
}
export default RandomQuiz