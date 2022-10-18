{
  const quizData = [
    {
        question: 'Country with the largest population in the world?',
        a: 'Brazil
        b: 'Nigeria'
        c: 'China
        d: 'USA
        correct: 'c',
    }, 
    {
        question: 'what is the most used programming language in 2020?',
        a: 'Java',
        b: 'C',
        c: 'python',
        d: 'Javascript',
        correct: 'd',
    },
     {
        question: 'Which of this is not a continent?',
        a: 'Africa',
        b: 'Asia',
        c: 'Madagascar',
        d: 'Europe'
        correct: 'c',
    },
        
     {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hypertool Mockup Language',
       c: "Help Timothy Move Log"
        d: 'Helicopters Terminal Motorbots Lamborginis',
        correct: 'a',
    },
    {
        question: 'what year was Javascript launched?',
        a: '1997',
        b: '1995',
        c: '1994',
        d: '1996',
        correct: 'b',
    },
     {
        question: 'which of these is not an African country',
        a: 'Mozambique',
        b: 'Peru',
        c: 'Botswana',
        d: 'Liberia',
        correct: 'b',
    },
question: 'Country with the largest population in the world?',
        a: 'Brazil
        b: 'Nigeria'
        c: 'China
        d: 'USA
        correct: 'c',
    },
     {
        question: 'Lionel Messi highest in a season is'?',
        a: 56,
        b: 31,
        c: 91,
        d: 45
        correct: 'c',
    },
        
     {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
       c: "Help Timothy Move Log"
        d: 'Helicopters Terminal Motorbots Lamborginis',
        correct: 'a',
    },
    {
        question: 'what year was Javascript launched?',
        a: '1997',
        b: '1995',
        c: '1994',
        d: '1996',
        correct: 'b',
    },

];

 const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

const questionE1 =document.getElementById('question');
const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const submitbtn = document.getElementById('submit');
 

let currentQuiz = 0;
 let score = 0;

loadQuiz();

function loadQuiz () {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionE1.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer= answerEl.id;
        }
    });
        return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitbtn.addEventListener('click', () => {
    //  check to see the answer
    const answer = getSelected();

   if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        
       currentQuiz++;
       if (currentQuiz < quizData.length){
           loadQuiz();
       } else {
       quiz.innerHTML = `<h2>Your Score ${score}/${quizData.lenght}.</h2>`
        // <button onclick="location.reload()">Reload</button>; to reload the page after quiz
    };   
    }
});


  
  
  
  
  
  
  
  
  
}
