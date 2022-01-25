import React, { useState } from "react";
import CapitalsQuiz from "../components/CapitalsQuiz";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CapitalsQuizContainer = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

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
                    <CapitalsQuiz/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CapitalsQuizContainer;