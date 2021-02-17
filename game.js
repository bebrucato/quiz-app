//Constants/vars
var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var progressBarFull = document.querySelector("#progressBarFull");

//declarations/formulations
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What year did the film The Lost Boys get released?",
        choice1: "1987",
        choice2: "1990",
        choice3: "1985",
        choice4: "1992",
        answer: 1,
    },
    {
        question: "How many Nightmare on Elmstreet films are there?",
        choice1: "5",
        choice2: "7",
        choice3: "9",
        choice4: "6",
        answer: 3,
    },
    {
        question: "How many people involved with the film The Exorcist died during production?",
        choice1: "1",
        choice2: "4",
        choice3: "11",
        choice4: "9",
        answer: 4,
    },
    {
        question: "Which famous author wrote the novel and film adaptation of It?",
        choice1: "Charles Dickens",
        choice2: "Stephen King",
        choice3: "Mary Shelley",
        choice4: "Jane Austen",
        answer: 2,
    }
]

var SCORE_POINTS = 100
var MAX_QUESTIONS = 4

startGame = () => {
    questionCounter= 0
    score= 0
    availableQuestions= [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText= `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width= `${(questionCounter/MAX_QUESTIONS) * 100}%`

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion= availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number= choice.dataset['number']
        choice.innerText= currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers= true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return
        
        acceptingAnswers= false
       var selectedChoice= e.target
       var selectedAnswer= selectedChoice.dataset['number']

        let classToApply= selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if (classToApply === 'correct') {
           incrementScore(SCORE_POINTS)
            } 
        
            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout( () => {
                selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion()
            }, 1000)
    
    })
})

incrementScore= num => {
    score +=num
    scoreText.innerText = score
}

startGame ()

