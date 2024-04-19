const questions = [
    {
        question: "Որ մարզում է գտնվում Տաթև գյուղը?",
        a: "Լոռու մարզ",
        b: "Արագածոտնի մարզ", 
        c: "Արմավիրի մարզ",
        d: "Սյունիքի մարզ",
        correct: "d"
    },
{
    question: "Քանի մետր է Տաթևի  ճոպանուղին գնում ու գալիս ընդհանուր?",
    a: "5752 մ",
    b: "4592 մ", 
    c: "7354 մ",
    d: "4712 մ",
    correct: "a"
},
{
    question: "Ինչքան բարձրության վրա է գտնվում Տաթևի ճոպանողին?",
    a: "120 մ",
    b: "750 մ", 
    c: "320 մ",
    d: "501 մ",
    correct: "c"
},
{
    question: "Ովքեր են իրականացնում  <ՏաԹևեր> նախագիծը և ինչ ծրագրի շրջանակներում?",
    a: " Արամ Լալայանի և Իրինա Տոշկովի կողմից մեկնարկած «ՏաԹևի Վերածնունդ» ծրագրի շրջանակներում։", 
    b: " Ռուբեն Վարդանյանի և Վերոնիկա Զոնաբենդի կողմից մեկնարկած «ՏաԹևի Վերածնունդ» ծրագրի շրջանակներում։",
    c: " Կարեն Վարդանյանի և Իննա Լասկովի կողմից մեկնարկած «ՏաԹևի Վերածնունդ» ծրագրի շրջանակներում։",
    d: " Դիաննա Վարդանյանի և Գայանե Համբարձումյանի կողմից մեկնարկած «ՏաԹևի Վերածնունդ» ծրագրի շրջանակներում։",
    correct: "b"
},
]

const questionEl = document.getElementById("quest")
const nextBtn = document.getElementById("next-btn")
const quiz = document.getElementById("quiz")
const Btns = document.getElementById("btns")
const aText = document.getElementById("a-text")
const bText = document.getElementById("b-text")
const cText = document.getElementById("c-text")
const dText = document.getElementById("d-text")
const answerEls = document.querySelectorAll(".answers")


let currentQuestionIndex = 0
let score  = 0


function showQuestions () {
    deselect()
    let currentQuestion = questions[currentQuestionIndex]

    questionEl.innerText = currentQuestion.question
    aText.innerText = currentQuestion.a
    bText.innerText = currentQuestion.b
    cText.innerText = currentQuestion.c
    dText.innerText = currentQuestion.d


}


function getSelected () {

    let answer = undefined

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
        
    })
    return answer


}

function deselect() {


    answerEls.forEach((answerEl) => {
            answerEl.checked = false
        
    })
}


nextBtn.addEventListener("click", () => {

    const answer = getSelected()

    if (answer) {
        if (answer === questions[currentQuestionIndex].correct) {
            score++
        }
    }
    currentQuestionIndex++

    if(currentQuestionIndex < questions.length) {
        showQuestions()
    } else {
        quiz.innerHTML = `<h2>  Դուք ճիշտ պատասխանեցիք ${score}/${questions.length} հարցերից. </h2>`
    }



})

showQuestions()

