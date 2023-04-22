const quizDB = [
    {
        question: "Q1: Brass gets discoloured in air because of the presence of which of the following gases in air?",
        a: "Oxygen",
        b: "Hydrogen sulphide",
        c: "Carbon dioxide",
        d: "Nitrogen",
        ans: "ans2"
    },
    {
        question: "Q2: Which of the following is used in pencils?",
        a: "Graphite",
        b: "Silicon",
        c: "Charcoal",
        d: "Phosphorous",
        ans: "ans1"
    },
    {
        question: "Q3: Which of the following is used as a moderator in nuclear reactors?",
        a: "Silicon",
        b: "Graphite",
        c: "Charcoal",
        d: "Phosphorous",
        ans: "ans2"
    },
    {
        question: "Q4: Which of the following is used in wine?",
        a: "Grapes",
        b: "Mango",
        c: "Tomato",
        d: "Carrot",
        ans: "ans1"
    },
    {
        question: "Q5: From which among the following parts of a plant Cinnamon is obtained?",
        a: "Leaves",
        b: "Seeds",
        c: "Bark",
        d: "Buds",
        ans: "ans3"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const nextSection = document.querySelector('#end-q');

const answers = document.querySelectorAll('.answer');

const startingMinutes = 0.4;
let time  = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

myTimer = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 20 ? '0' + seconds:seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;

    time--;

    if (time < 0) {
        clearInterval(myTimer);
        answers.forEach((option) => {
            option.setAttribute("onclick", "this.checked=false; alert('Test has ended. Please go to next section')");
        });
        alert("Test has ended. Please go to next section");
        nextSection.setAttribute("style", "display:block;");
        document.querySelector("#submit").setAttribute("style", "display:none;");
    }
}

let questionCount = 1;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount-1];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answerSelected;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answerSelected = curAnsElem.id;
        } 
    });

    return answerSelected;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => {curAnsElem.checked = false});
}


    submit.addEventListener('click', () => {
        const checkedAnswer = getCheckAnswer();
    
        if(checkedAnswer == quizDB[questionCount-1].ans){
            score = score + 2;
            console.log(score);
        };
    
        if(questionCount < 5 ){
            questionCount++;
            document.querySelector("#counter").innerText = questionCount;
        }
    
        if (questionCount == 5) {
            nextSection.setAttribute("style", "display:block;");
        }
    
        deselectAll();
    
        if(questionCount < quizDB.length+1){
            loadQuestion();
        }
    });
