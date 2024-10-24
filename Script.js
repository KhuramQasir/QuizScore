const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello to my Land",
        b: "Hyper Text Markup Language",
        c: "Hello To My Live",
        d: "Hello To My Life",
        ans: "ans2"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Colorful Style Sheets",
        c: "Computer Style Sheets",
        d: "Creative Style Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What does JS stand for?",
        a: "Java System",
        b: "Just Script",
        c: "JavaScript",
        d: "Jolly Script",
        ans: "ans3"
    },
    {
        question: "Q4: Which tag is used to create a hyperlink in HTML?",
        a: "<link>",
        b: "<a>",
        c: "<href>",
        d: "<img>",
        ans: "ans2"
    },
    {
        question: "Q5: What is the correct syntax for referring to an external JavaScript file?",
        a: "<script href='app.js'></script>",
        b: "<script name='app.js'></script>",
        c: "<script src='app.js'></script>",
        d: "<script link='app.js'></script>",
        ans: "ans3"
    }
];

const question= document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')
const answers =document.querySelectorAll('.answer')
const showScore= document.querySelector('#showScore')

let questionCount =0;
let score =0;

const loadQuestion =()=>{

    const   questionList = quizDB[questionCount]
    question.innerText =questionList.question

    option1.innerText = questionList.a
    option2.innerText = questionList.b
    option3.innerText = questionList.c
    option4.innerText = questionList.d
}
 loadQuestion();

const getCheckAnswer =()=>{
    let answer 

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
     

    });
    return answer;
};

const deselectAll =()=>{
    answers.forEach((curAnsElem) => curAnsElem.checked =false)
}


 submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer)

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
       
    };
    questionCount++;

    deselectAll();
    
    console.log(score)
    if(questionCount < quizDB.length){
        loadQuestion();
        }
        
        else{
            
            showScore.innerHTML =`<h3>
            You scored ${score} out of ${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>`
           
            showScore.classList.remove('scoreArea')
        }
           

 });
