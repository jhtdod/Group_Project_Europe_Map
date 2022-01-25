const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const questionContainerElement = document.getElementById('question-container')
const answerButtonsElement = document.getElementById('answer-buttons')


const questions = [
    {
        question: "What is capital of Spain?",
        answers: [
            {text: "Madrid", correct: true},
            {text: "Barcelona", correct: false},
            {text: "London", correct: false},
            {text: "Berlin", correct: false}
        ]
    },
    {
        question: "What is capital of Estonia?",
        answers: [
            {text: "Vaduz", correct: false},
            {text: "Tirana", correct: false},
            {text: "Tallinn", correct: true},
            {text: "Valletta", correct: false}
        ]
    },
    {
        question: "What is capital of Montenegro?",
        answers: [
            {text: "Skopje", correct: false},
            {text: "Podgorica", correct: true},
            {text: "Zagreb", correct: false},
            {text: "Edinburgh", correct: false}
        ]
    },
    {
        question: "What is capital of Sweden?",
        answers: [
            {text: "Copenhagen", correct: false},
            {text: "Oslo", correct: false},
            {text: "Dublin", correct: false},
            {text: "Stockholm", correct: true}
        ]
    },
    {
        question: "What is capital of Latvia?",
        answers: [
            {text: "Riga", correct: true},
            {text: "Rome", correct: false},
            {text: "Reykjavik", correct: false},
            {text: "Ljubljana", correct: false}
        ]
    },
    
]
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame () {
    countdown()
    startButton.classList.add('hide')
    answerButtonsElement.classList.remove('hide')
    //randomise order that Qs come up - assign float between 1-0 then take away 0.5 then 1 is gunna be less than 0, 1 is gunna be positive 50% of the time. currentquestionindex starts at 0 ie the very first Q
    shuffledQuestions = questions.sort( () => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestions(shuffledQuestions[currentQuestionIndex])
}

function resetState () {
    clearStatusClass(document.body) //changes colour back to blue hue
    questionContainerElement.classList.remove('hide')
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++ //adds 1 to next question which will be random
    setNextQuestion()
})

function showQuestions(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer (pick) {
    const selectedButton = pick.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    //move to next question or show restart button
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    }
    else 
    {
    stopTimer()
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function startTimer(duration, display) {
    
    let start = Date.now(),
    diff,
    minutes,
    seconds;

    function timer() {

        diff = duration - (((Date.now() - start) / 1000) | 0);
    
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
    
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
    
        display.textContent = minutes + ":" + seconds; 
    
    if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 10:00 not 09:59
            start = Date.now() + 1000;
        }
    if (diff === 0){
            stopTimer()
            startButton.innerText = 'Restart'
            startButton.classList.remove('hide')
            nextButton.classList.add('hide')
            answerButtonsElement.classList.add('hide')
        }
    };
    timer()
    timing = setInterval(timer, 1000);
};

function stopTimer() {
    clearInterval(timing)
};

function countdown (){
    var tenMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(tenMinutes, display);
};
