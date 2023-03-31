const quizData = [
    {
        page: 1,
        question: "What does CSS stand for? ",
        a: "Creative Style Sheets",
        b: "Cascading Style Sheets",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets",
        correct: "b"
    },

    {
        page: 2,
        question: "What is the function of a computer monitor?",
        a: "It input data into the computer",
        b: "It manupulate data into an information",
        c: "It displays information to the user",
        d: "It calculate text",
        correct: "c"
    },

    {
        page: 3,
        question: "What is the full name of HTML?",
        a: "HyperText Makeup language",
        b: "HyperText Maker language",
        c: "Hyperlinks Protocol language",
        d: "TransferText protocol",
        correct: "a"
    },

    {
        page: 4,
        question: "Javascript can do the following except",
        a: "Can make webpages dynamic",
        b: "Can make webpages interative to users",
        c: "Can be use to write softwares",
        d: "To build the structure of a webpage",
        correct: "d"
    },

    {
        page: 5,
        question: "React.js is a ____  library? ",
        a: "Java",
        b: "Javascript",
        c: "Python",
        d: "C++",
        correct: "b"
    },

    {
        page: 6,
        question: "What is the full name of UI",
        a: "color",
        b: "user interface",
        c: "backend",
        d: "browser",
        correct: "b"
    },

    {
        page: 7,
        question: "Who's a fullstack developer",
        a: "One who develop the frontend and the backend of a website",
        b: "One who plays organ",
        c: "One who write mobile apps",
        d: "A pentecost pastor",
        correct: "a"
    },

    {
        page: 8,
        question: "One of the following is a living thing",
        a: "Stones",
        b: "Car",
        c: "Fish",
        d: "Mansion",
        correct: "c"
    }

    , {
        page: 9,
        question: "what is the full name for C.P.U",
        a: "Central Processing Unit",
        b: "Central Process Unit",
        c: "Central Pass United",
        d: "Center Processing Unit",
        correct: "a"
    },

    {
        page: 10,
        question: "What is the function of the computer Keyboard",
        a: "To display information",
        b: "To play organ",
        c: "To input data into the computer",
        d: "To process data into an information",
        correct: "c"
    },

    {
        page: 11,
        question: "Multiply 30 x 15",
        a: "200",
        b: "450",
        c: "550",
        d: "459",
        correct: "b"
    },

    {
        page: 12,
        question: "Which element will make the text look big",
        a: "<h1></h1>",
        b: "<p></p>",
        c: "<h3></h3>",
        d: "<header></header>",
        correct: "a"
    },

    {
        page: 13,
        question: "Add the following numbers 133 + 15 + 27",
        a: "186",
        b: "189",
        c: "178",
        d: "175",
        correct: "c"
    },

    {
        page: 14,
        question: "The special part that help computer to think is called",
        a: "Super computer",
        b: "Mini computer",
        c: "Mainframe",
        d: "Microprocessor",
        correct: "d"
    },

    {
        page: 15,
        question: "The fastest computer is found in.....",
        a: "USA department of e-basic",
        b: "US department of energy",
        c: "UK department of energy",
        d: "GHANA department of energy",
        correct: "b"
    },

    {
        page: 16,
        question: "The first computer generation use......",
        a: "transistors",
        b: "speakers",
        c: "vacuum tubes",
        d: "vacum pipes",
        correct: "c"
    },

    {
        page: 17,
        question: "The second computer generation use..",
        a: "transistors",
        b: "joystick",
        c: "vacuum pipes",
        d: "vacuum tubes",
        correct: "a"
    },

    {
        page: 18,
        question: "How many categories do we have in computer hardware",
        a: "1",
        b: "3",
        c: "5",
        d: "2",
        correct: "c"
    },

    {
        page: 19,
        question: "which of the following is an example of output device",
        a: "moniter",
        b: "pendrive",
        c: "keyboard",
        d: "mouse",
        correct: "a"
    },

    {
        page: 20,
        question: "which of the following uses eletricity",
        a: "pen",
        b: "book",
        c: "television",
        d: "table",
        correct: "c"
    },
]

const quizApp = document.getElementById("quiz-app")
const questionEl = document.getElementById("question")
const a_text = document.querySelector("#a_text")
const b_text = document.querySelector("#b_text")
const c_text = document.querySelector("#c_text")
const d_text = document.querySelector("#d_text")
const answers = document.querySelectorAll('.answers')
const previousBtn = document.querySelector('#btn-left')
const nextBtn = document.querySelector('#btn-right')
const submitBtn = document.querySelector("#submit")
const pages = document.getElementById("pages")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
let userEl = document.getElementById("user")

let userData = prompt("Please enter your name to start quiz: ")



let minute = 4
let s = 59
timeReader()

// SetTimeout function

function timeReader() {

    function secondsEl() {

        if (s == 0) {
            minute--
            if (s == 0) { s = 59 }
        }

        if (minute < 0) {
            quizApp.innerHTML = `<h1>Time out,  Quiz Over ${userData}</h1> ${score}  /  ${quizData.length}`
            quizApp.style.textAlign = "center"
        }

    }
    secondsEl()



    minutes.innerText = minute
    seconds.innerText = s


    setTimeout(function () {
        timeReader()
        s--
    }, 1000)

    //console.log(minute);
}



// Main quiz logic

let score = 0
let currentQuiz = 0
let finalanswer;



loadQuiz()

function loadQuiz() {


    deSelect()
    const quizes = quizData[currentQuiz]

    questionEl.innerText = quizes.question
    a_text.innerText = quizes.a
    b_text.innerText = quizes.b
    c_text.innerText = quizes.c
    d_text.innerText = quizes.d
    pages.innerText = quizes.page
    userEl.innerText = userData

}

// checking user selection and comparing answers

function deSelect() {
    answers.forEach(answer => answer.checked = false)
}

function getSelected() {
    answers.forEach(answer => {
        if (answer.checked) {
            finalanswer = answer.id
        }
    })
    return finalanswer;
}

// Logic for submiting answer 

submitBtn.addEventListener('click', () => {
    let finalanswer = getSelected()
    if (finalanswer) {
        if (finalanswer == quizData[currentQuiz].correct) {
            score++
        }
    }
    currentQuiz++
    (currentQuiz < quizData.length) ? loadQuiz() : quizApp.innerHTML =
    
    
    `<h1>Quiz over ${userData} ,  You scored    ${score}  /  ${quizData.length}</h1>`





})

previousBtn.addEventListener('click', () => {
    currentQuiz--;
    if (currentQuiz < 0) {
        currentQuiz = quizData.length - 1
    }
    loadQuiz()

})

nextBtn.addEventListener('click', () => {
    currentQuiz++;
    if (currentQuiz > quizData.length - 1) {
        currentQuiz = 0
    }
    loadQuiz()
})

