import React, { useEffect, useState } from "react";
import CapitalsQuiz from "../components/CapitalsQuiz";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CapitalsQuizContainer = () => {

    const questions = [
        {
            question: "What is capital of Spain?",
            answers: [
                { text: "Madrid", correct: true },
                { text: "Barcelona", correct: false },
                { text: "London", correct: false },
                { text: "Berlin", correct: false }
            ]
        },
        {
            question: "What is capital of Estonia?",
            answers: [
                { text: "Vaduz", correct: false },
                { text: "Tirana", correct: false },
                { text: "Tallinn", correct: true },
                { text: "Valletta", correct: false }
            ]
        },
        {
            question: "What is capital of Montenegro?",
            answers: [
                { text: "Skopje", correct: false },
                { text: "Podgorica", correct: true },
                { text: "Zagreb", correct: false },
                { text: "Edinburgh", correct: false }
            ]
        },
        {
            question: "What is capital of Sweden?",
            answers: [
                { text: "Copenhagen", correct: false },
                { text: "Oslo", correct: false },
                { text: "Dublin", correct: false },
                { text: "Stockholm", correct: true }
            ]
        },
        {
            question: "What is capital of Latvia?",
            answers: [
                { text: "Riga", correct: true },
                { text: "Rome", correct: false },
                { text: "Reykjavik", correct: false },
                { text: "Ljubljana", correct: false }
            ]
        },
    ]

    const [show, setShow] = useState(false)
    const [start, setStart] = useState(true)
    const [endPage, setEndPage] = useState(false)
    const [startButton, setStartButton] = useState("Start")
    const [newQuestion, setNewQuestion] = useState([])
    const [questionCount, setQuestionCount] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [hasAnswered, setHasAnswered] = useState(false)
    const [score, setScore] = useState(0)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const findTrue = () => {
        const correctAnswerArray = questions[questionCount].answers.find(answer => answer.correct === true)
        const answerText = correctAnswerArray["text"]
        setCorrectAnswer(answerText)
    }

    const handleStart = () => {
        setScore(0)
        setEndPage(false)
        setNewQuestion([questions[questionCount]])
        setQuestionCount(1)
        setStart(false)
        findTrue()
    }

    const handleNext = () => {
        setHasAnswered(false)
        if (questionCount <= questions.length - 1) {
            setNewQuestion([questions[questionCount]])
            let newCount = questionCount + 1;
            setQuestionCount(newCount);
            findTrue()
        } else {
            setStartButton("Restart")
            setStart(true)
            setEndPage(true)
            setQuestionCount(0)
        }
    }

    return (
        <>
            <Button onClick={handleShow}>
                <h3>Capitals Quiz</h3>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Capitals Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="controls">
                        {start ? 
                        <div>
                            {endPage ? <h5>Your final score is {score}/{questions.length} </h5> : null}
                            <button id="start-btn" onClick={handleStart}>{startButton}</button>
                        </div>
                         :
                            <div className="quiz">
                                <CapitalsQuiz 
                                newQuestion={newQuestion} 
                                correctAnswer={correctAnswer} 
                                setHasAnswered={setHasAnswered} 
                                hasAnswered={hasAnswered}
                                score={score}
                                setScore={setScore}
                                />
                                <button id="next-btn" onClick={handleNext}>Next</button>
                            </div>}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CapitalsQuizContainer;