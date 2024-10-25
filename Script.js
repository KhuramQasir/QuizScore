const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello to my Land",
        b: "Hyper Text Markup Language",
        c: "Hello To My Live",
        d: "Hello To My Life",
        ans: "ans2",
        feedback: "HTML stands for Hyper Text Markup Language, the standard language for creating web pages."
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Colorful Style Sheets",
        c: "Computer Style Sheets",
        d: "Creative Style Sheets",
        ans: "ans1",
        feedback: "CSS stands for Cascading Style Sheets, used to style HTML elements on web pages."
    },
    {
        question: "Q3: What does JS stand for?",
        a: "Java System",
        b: "Just Script",
        c: "JavaScript",
        d: "Jolly Script",
        ans: "ans3",
        feedback: "JS stands for JavaScript, a popular programming language for web development."
    },
    {
        question: "Q4: Which tag is used to create a hyperlink in HTML?",
        a: "<link>",
        b: "<a>",
        c: "<href>",
        d: "<img>",
        ans: "ans2",
        feedback: "The <a> tag is used to create hyperlinks in HTML."
    },
    {
        question: "Q5: What is the correct syntax for referring to an external JavaScript file?",
        a: "<script href='app.js'></script>",
        b: "<script name='app.js'></script>",
        c: "<script src='app.js'></script>",
        d: "<script link='app.js'></script>",
        ans: "ans3",
        feedback: "The correct syntax to refer to an external JavaScript file is <script src='app.js'></script>."
    }
];

const question= document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const next = document.querySelector('#next');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const showfeedback = document.querySelector('#showfeedback');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};
loadQuestion();
let answer;
const getCheckAnswer = () => {
    let answer;
    
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
        console.log(answers)
    });
    return answer;
    
};


const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
   

    if (checkedAnswer === quizDB[questionCount].ans) {
        
        score++;
        showScore.innerText = `Correct option ${quizDB[questionCount].ans}`;
        showfeedback.innerText = `FeedBack : Correct! ${quizDB[questionCount].feedback}`;

      console.log(quizDB[questionCount].ans)
    } else {
        showScore.innerText = "Incorrect option" ;
        // showfeedback.innerText = `FeedBack : Incorrect! ${quizDB[questionCount].question}`;

      
    }

    submit.style.display = "none";
    next.style.display = "inline";
    document.getElementById("ans1").disabled = true;
    document.getElementById("ans2").disabled = true;
    document.getElementById("ans3").disabled = true;
    document.getElementById("ans4").disabled = true;
});

next.addEventListener('click', () => {

    document.getElementById("ans1").disabled = false;
    document.getElementById("ans2").disabled = false;
    document.getElementById("ans3").disabled = false;
    document.getElementById("ans4").disabled = false;
    questionCount++;
    if (questionCount < quizDB.length) {
        loadQuestion();
        deselectAll();
        showScore.innerText = "";
        showfeedback.innerText = "";
        submit.style.display = "inline";
        next.style.display = "none";
    } else {
        showfeedback.innerText = "";
        showScore.innerHTML = `<h3>You scored ${score} out of ${quizDB.length}</h3>
                                <button class="btn" onclick="location.reload()">Play Again</button>`;
        next.style.display = "none";
    }
});