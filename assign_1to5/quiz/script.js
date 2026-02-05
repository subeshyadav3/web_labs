const quizBox=document.getElementById("quiz-box");
const quizStart=document.getElementById("quiz-start");
const result=document.getElementById('result')

const quiz_questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: "<a>"
    },
    {
        question: "Which CSS property is used to change text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "foreground"
        ],
        answer: "color"
    },
    {
        question: "Which CSS unit is relative to the parent element?",
        options: [
            "px",
            "em",
            "cm",
            "mm"
        ],
        answer: "em"
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "static"
        ],
        answer: "const"
    }
];

let question_counter=0;
let isQuizRunning=false;
let userAnswers=[];


function playQuiz(){
    quizStart.style.display='none';
    question_counter=0;
    isQuizRunning=true;
    userAnswers=[]
    showQuizQuestions();
}

function selectOption(selected,questionNumber){
    document.querySelectorAll('.option-btn').forEach(btn=>{
        btn.classList.remove('selected')
    })
 
    selected.classList.add('selected');
    const selectedQuestion=userAnswers.find(question=>(question.questionNumber==questionNumber))
    if(selectedQuestion){
        selectedQuestion.answer=selected.textContent;
    }
    else{
        userAnswers.push({
            questionNumber:questionNumber,
            answer:selected.textContent
        })
    }

}

function showResult(){
    quizBox.innerHTML="";
    let userScore=0;
    userAnswers.map((quiz)=>{
        const correctAnswer = quiz_questions[quiz.questionNumber];
        if(correctAnswer.answer==quiz.answer){
            userScore+=1;
        }
    })
    const resultScore=document.createElement("h3");
    resultScore.textContent=`Total Score: ${userScore}/${quiz_questions.length}`;
    result.appendChild(resultScore);

    const resetBtn=document.createElement('button');
    resetBtn.textContent="Reset"
    result.style.display='block'
    result.appendChild(resetBtn)

    resetBtn.addEventListener("click",()=>{window.location.reload()})
}

function showQuizQuestions() {
    quizBox.innerHTML = "";
    let answerSelected = false;

    const question = quiz_questions[question_counter];

    const title = document.createElement("h3");
    title.textContent = `${question_counter + 1}. ${question.question}`;
    quizBox.appendChild(title);

    const ansChoices = document.createElement('div');
    ansChoices.classList.add('ansChoices');

    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.classList.add('option-btn');
        btn.addEventListener('click', () => {
            selectOption(btn, question_counter);
            answerSelected = true;
        });
        ansChoices.appendChild(btn);
    });

    quizBox.appendChild(ansChoices);

    const nextButton = document.createElement("button");
    nextButton.classList.add('next-btn');
    nextButton.textContent = (question_counter === quiz_questions.length - 1) ? "Result" : "Next";

    nextButton.addEventListener("click", () => {
        if (!answerSelected) {
            alert("Choose answer first before moving to next question!");
            return;
        }
        if (nextButton.textContent === 'Result') {
            showResult();
            return;
        }
        question_counter += 1;
        showQuizQuestions();
    });

    quizBox.appendChild(nextButton);
}
