let header = document.getElementById("heading");


const data = [
   {
    id: "1",
    question: "When was Arsenal F.C. founded ?",
    option1: "1886",
    option2: "1896",
    option3: "1906",
    option4: "1916",
    correctAnswer: "1886"
   },

   {
    id: "2",
    question: "Who is the all time top goal scorer for Arsenal F.C. ?",
    option1: "Robin Van Persie",
    option2: "Ian Wright",
    option3: "Thierry Henry",
    option4: "Dennis Bergkamp",
    correctAnswer: "Thierry Henry"
   },

   {
    id: "3",
    question: "How many FA cups have Arsenal F.C. won ?",
    option1: "6",
    option2: "9",
    option3: "14",
    option4: "16",
    correctAnswer: "14"
   },

   {
      id: "4",
      question: "What season did Arsenal F.C. go through the season without losing a game ?",
      option1: "2003/2004",
      option2: "2002/2003",
      option3: "2004/2005",
      option4: "2005/2006",
      correctAnswer: "2003/2004"
     },

     {
      id: "5",
      question: "What is Arsenal F.C. clubs nickname ?",
      option1: "The reds",
      option2: "The goons",
      option3: "The gunners",
      option4: "The shooters",
      correctAnswer: "The gunners"
     },

     {
      id: "6",
      question: "How many seasons was Arsene Wenger managing Arsenal F.C. ?",
      option1: "22 seasons",
      option2: "15 seasons",
      option3: "18 seasons",
      option4: "20 seasons",
      correctAnswer: "22 seasons"
     },

     {
      id: "7",
      question: "What year Arsenal F.C. beat Barcelona ?",
      option1: "2009",
      option2: "2007",
      option3: "2011",
      option4: "2012",
      correctAnswer: "2011"
     },

     {
      id: "8",
      question: "Who club is Arsenal F.C. biggest rivals ?",
      option1: "Manchester United",
      option2: "Manchester City",
      option3: "Liverpool",
      option4: "Tottenham Hotspur",
      correctAnswer: "Tottenham Hotspur"
     },

     {
      id: "9",
      question: "What colour is Arsenal F.C. home kit ?",
      option1: "White",
      option2: "Blue",
      option3: "Red",
      option4: "Red and white",
      correctAnswer: "Red and white"
     },

     {
      id: "10",
      question: "What club was Mikel Arteta an assistant coach before joining Arsenal F.C. ?",
      option1: "Chelsea",
      option2: "Manchester City",
      option3: "Liverpool",
      option4: "Tottenham Hotspur",
      correctAnswer: "Manchester City"
     },
  

]

var item = data[Math.floor(Math.random()*data.length)];


console.log(item, "<==data>")