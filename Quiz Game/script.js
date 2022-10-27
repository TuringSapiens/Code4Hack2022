console.log("manali"); 
const quizDB= [ 
    {
    question: "Q1: What is the fullform of HTML?",
    a: "Hello To My land",
    b: "Hey text markup language",
    c: "HyperText Markup Language",
    d: "Hyper text makeup language",
    ans: "ans3"
},
 {
    question: "Q2: What is the full name of BigB?",
    a: "Amitabh Bacchan",
    b: "Abhishek Bacchan",
    c: "Aishwaraya Bacchan",
    d: "Aaradhya Bachhan",
    ans: "ans1"
 },
 {
   question: "Q3: Who is Don?",
   a: "Amitabh Bacchan",
   b: "Shah Rukh Khan",
   c: "Salman Khan",
   d: "Shahid Kapoor",
   ans: "ans1"
 },
 {
    question: "Q4: Manali ke pass konsa phone hai?",
    a: "One plus Nord",
    b: "Moto G31",
    c: "Real me",
    d: "Dabba",
    ans: "ans1"
 }
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let questionCount=0;
let score=0;
const loadQuestion=()=>{
    question.innerText=quizDB[questionCount].question;
    option1.innerText=quizDB[questionCount].a;
    option2.innerText=quizDB[questionCount].b;
    option3.innerText=quizDB[questionCount].c;
    option4.innerText=quizDB[questionCount].d;
}
loadQuestion();
const getCheckAnswer=()=>{
  let answer;  
   answers.forEach((currentAnswerElement)=>{
    if(currentAnswerElement.checked)
    {
        answer=currentAnswerElement.id;
    }
   })
   return answer;
};
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer===quizDB[questionCount].ans)
    {
        score++;
    }
    questionCount++;
    const deselectAll=()=>{
        answers.forEach((e)=>e.checked=false);
    }
    deselectAll();
    if(questionCount<quizDB.length)
    {
        loadQuestion(); 
    }
    else
    {
        showScore.innerHTML=`
        <h3>You Scored ${score}/${quizDB.length} ✌️</h3>
        <button class="btn onclick="location.reload()">Play Again </button>`; 
        showScore.classList.remove('scoreArea');
    }
})
















