const question = document.querySelector('#question');
const choices = Array.form (document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


let question = [
    {
     question: "When was Arsenal F.C. founded ?",
     choice1: "1886",
     choice2: "1896",
     choice3: "1906",
     choice4: "1916",
     answer: 1886,
    },
 
    {
     question: "Who is the all time top goal scorer for Arsenal F.C. ?",
     choice1: "Robin Van Persie",
     choice2: "Ian Wright",
     choice3: "Thierry Henry",
     choice4: "Dennis Bergkamp",
     answer: Thierry Henry,
    },
 
    {
     question: "How many FA cups have Arsenal F.C. won ?",
     choice1: "6",
     choice2: "9",
     choice3: "14",
     choice4: "16",
     answer: 14,
    },
 
    {
       question: "What season did Arsenal F.C. go through the season without losing a game ?",
       choice1: "2003/2004",
       choice2: "2002/2003",
       choice3: "2004/2005",
       choice4: "2005/2006",
       answer: 2003/2004,
      },
 
      {
       question: "What is Arsenal F.C. clubs nickname ?",
       choice1: "The reds",
       choice2: "The goons",
       choice3: "The gunners",
       choice4: "The shooters",
       answer: The gunners,
      },
 
      {
       question: "How many seasons was Arsene Wenger managing Arsenal F.C. ?",
       choice1: "22 seasons",
       choice2: "15 seasons",
       choice3: "18 seasons",
       choice4: "20 seasons",
       answer: 22 seasons,
      },
 
      {
       question: "What year Arsenal F.C. beat Barcelona ?",
       choice1: "2009",
       choice2: "2007",
       choice3: "2011",
       choice4: "2012",
       answer: 2011,
      },
 
      {
       question: "Who club is Arsenal F.C. biggest rivals ?",
       choice1: "Manchester United",
       choice2: "Manchester City",
       choice3: "Liverpool",
       choice4: "Tottenham Hotspur",
       answer: Tottenham Hotspur,
      },
 
      {
       question: "What colour is Arsenal F.C. home kit ?",
       choice1: "White",
       choice2: "Blue",
       choice3: "Red",
       choice4: "Red and white",
       answer: Red and white,
      },
 
      {
       question: "What club was Mikel Arteta an assistant coach before joining Arsenal F.C. ?",
       choice1: "Chelsea",
       choice2: "Manchester City",
       choice3: "Liverpool",
       choice4: "Tottenham Hotspur",
       answer: Manchester City,
      },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

getNewQuestions = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questioonsIndex = math.floor(math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices,forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsInedx, 1 )

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.AddEventListener('ckick', e => {
        if(!acceptingAnswers) return 

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestions()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()