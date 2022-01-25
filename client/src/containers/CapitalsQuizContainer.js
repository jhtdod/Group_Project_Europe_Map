import React, { useState } from "react";
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
    const [startButton, setStartButton] = useState("Start")
    const [newQuestion, setNewQuestion] = useState({})
    const [questionCount, setQuestionCount] = useState(0)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const handleStart = () => {
        setNewQuestion(questions[0])
        setQuestionCount(1)
        setStart(false)
    }

    const handleNext = () => {
        if (questionCount < questions.length - 1) {
            setNewQuestion(questions[questionCount])
            const newCount = questionCount++;
            setQuestionCount(newCount);
        } else {
            setStartButton("Restart")
            setStart(true)
        }
    }

    return(
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
                        {start ? <button id="start-btn" onClick={handleStart}>{startButton}</button> : 
                        <div className="quiz"> 
                            <CapitalsQuiz newQuestion={newQuestion}/>
                            <button id="next-btn" onClick={handleNext}>Next</button> 
                        </div> }
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CapitalsQuizContainer;