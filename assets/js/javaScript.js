

const data = [
   {
    id: "1",
    question: "how old are you?",
    option1: "10",
    option2: "20",
    option3: "40",
    correctAnswer: "20"
   },

   {
    id: "2",
    question: "how old are you?",
    option1: "10",
    option2: "20",
    option3: "40",
    correctAnswer: "20"
   },

   {
    id: "3",
    question: "how old are you?",
    option1: "10",
    option2: "20",
    option3: "40",
    correctAnswer: "20"
   },

]

var item = data[Math.floor(Math.random()*data.length)];


console.log(item, "<==data>")