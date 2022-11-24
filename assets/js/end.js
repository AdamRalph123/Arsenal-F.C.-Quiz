const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore =localStorage.getItem('mostRecentScore')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn = username.value;
})

/* Save button when finished quiz */
saveHighScore = e => {
    e.preventDefault()
        
    const score = {
            score: mostRecentScore,
            name: username.value
        };
        const errorE1 = document.getElementById("error");
        if(username.value.trim() == "" || username.value.length < 3){

            errorE1.innerText = "PLEASE ENTER MORE THAN 3 LETTERS";
        } else{
        errorE1.innerText = "";
        highScores.push(score);

        highScores.sort((a,b) => b.score - a.score);
        
        highScores.splice(5)
          
            localStorage.setItem ('highScores', JSON.stringify(highScores))
            window.location.assign('index.html')
        }
};