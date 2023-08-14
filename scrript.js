// FOR POP UP and CONTINUE SHOW BUTTONS and QUESTIONPOPS
const startButton = document.querySelector('.startButton');
const popupInfo = document.querySelector('.popupInfo');
const exitButton = document.querySelector('.exitButton');
const main = document.querySelector('.main');
const continueButton = document.querySelector('.continueButton');
const quizSection = document.querySelector('.quizSection');
const quizBox = document.querySelector('.quizBox');
const resultBox = document.querySelector('.resultBox');
const tryAgainButton = document.querySelector('.tryAgainButton');
const goBackButton = document.querySelector('.goBackButton');

startButton.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitButton.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueButton.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestions(0);
    questionCounter(1);
}

tryAgainButton.onclick = () => {
    quizBox.classList.add('active');
    nextButton.classList.remove('active');
    resultBox.classList.remove('active');

     questionCount = 0;
     questionNumb = 1;
     userScore = 0;
     showQuestions(questionCount);
     questionCounter(questionNumb);
     headerScore();

}

goBackButton.onclick = () => {
    quizSection.classList.remove('active');
    nextButton.classList.remove('active');
    resultBox.classList.remove('active');

     questionCount = 0;
     questionNumb = 1;
     userScore = 0;
     showQuestions(questionCount);
     questionCounter(questionNumb);
     headerScore();
}

// QUESTIONS COUNT
let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextButton = document.querySelector('.nextButton');
nextButton.onclick = () => {
    if(questionCount < questions.length - 1){
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextButton.classList.remove('active');

    }
    else{
        showResultBox();
    }
}


//for getting questions and options from array
function showQuestions(index){
    const questionText = document.querySelector('.questionText');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
                     <div class="option"><span>${questions[index].options[1]}</span></div>
                     <div class="option"><span>${questions[index].options[2]}</span></div>
                     <div class="option"><span>${questions[index].options[3]}</span></div>`; 

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');

    for(let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick','optionSelected(this)');
    }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if(userAnswer == correctAnswer){
    answer.classList.add('correct');
    userScore ++;
    headerScore();
    }
    else{
    answer.classList.add('incorrect');

    //if answer is incorrect, auto select correct option
    for(let i = 0; i < allOptions; i++){
       if(optionList.children[i].textContent == correctAnswer){
        optionList.children[i].setAttribute('class','option correct');
       }
    }
    }

    //if one option selected, disable other options
    for(let i = 0; i < allOptions; i++){
        optionList.children[i].classList.add('disable');
    }

    nextButton.classList.add('active');

}

//for changing options
const optionList = document.querySelector('.optionList');

//for counting questions
function questionCounter(index){
const questionTotal = document.querySelector('.questionTotal');
questionTotal.textContent = `${index} of ${questions.length} Questions`
}

//to count the user score
function headerScore() {
    const headerScoreText = document.querySelector('.headerScore');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;

}

//to show results
function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.scoreText');
    scoreText.textContent = `You Got ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circularProgress');
    const progressValue = document.querySelector('.progressValue');

    let progressInitialValue = -1 ;
    let progressFinalValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval( () => 
    {
        progressInitialValue++;
        progressValue.textContent = `${progressInitialValue}%`;

        circularProgress.style.background = `conic-gradient(#fff ${progressInitialValue * 3.6}deg,rgb(3, 107, 148) 0deg)`;

        if(progressInitialValue == progressFinalValue) {
            clearInterval(progress);
        }
    }, speed);
}





//FOR QUESTIONS DATA
let questions = [
    {
        numb: 1,
        question: "Which of the following is the capital of Turkey?",
        answer: "C. Ankara",
        options: [
            "A. Baku",
            "B. Canberra",
            "C. Ankara",
            "D. Berlin"
        ]
    },
    {
        numb: 2,
        question: "What is the largest planet in our solar system?",
        answer: "A. Jupiter",
        options: [
            "A. Jupiter",
            "B. Saturn",
            "C. Neptune",
            "D. Mars"
        ]
    },
    {
        numb: 3,
        question: "Which famous scientist developed the theory of relativity?",
        answer: "B. Albert Einstein",
        options: [
            "A. Isaac Newton",
            "B. Albert Einstein",
            "C. Galileo Galilei",
            "D. Nikola Tesla"
        ]
    },
    {
        numb: 4,
        question: "Which novel is written by Jane Austen?",
        answer: "D. Pride and Prejudice",
        options: [
            "A. Moby-Dick",
            "B. War and Peace",
            "C. The Great Gatsby",
            "D. Pride and Prejudice"
        ]
    },
    {
        numb: 5,
        question: "What is the chemical symbol for the element gold?",
        answer: "C. Au",
        options: [
            "A. Go",
            "B. Go",
            "C. Au",
            "D. Ag"
        ]
    },
    {
        numb: 6,
        question: "Which continent is known as the 'Land of the Rising Sun'?",
        answer: "B. Asia",
        options: [
            "A. Europe",
            "B. Asia",
            "C. Australia",
            "D. Africa"
        ]
    },
    {
        numb: 7,
        question: "What is the smallest prime number?",
        answer: "A. 2",
        options: [
            "A. 2",
            "B. 1",
            "C. 3",
            "D. 5"
        ]
    },
    {
        numb: 8,
        question: "Which planet is known as the 'Red Planet'?",
        answer: "D. Mars",
        options: [
            "A. Venus",
            "B. Jupiter",
            "C. Saturn",
            "D. Mars"
        ]
    },
    {
        numb: 9,
        question: "Who painted the Mona Lisa?",
        answer: "C. Leonardo da Vinci",
        options: [
            "A. Pablo Picasso",
            "B. Vincent van Gogh",
            "C. Leonardo da Vinci",
            "D. Michelangelo"
        ]
    },
    {
        numb: 10,
        question: "What is the national flower of Japan?",
        answer: "B. Cherry Blossom",
        options: [
            "A. Rose",
            "B. Cherry Blossom",
            "C. Lily",
            "D. Tulip"
        ]
    }
];