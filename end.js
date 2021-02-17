var username = document.querySelector("#username");
var saveScoreBtn = document.querySelector("#saveScoreBtn");
var finalScore = document.querySelector("#finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || []

var MAX_HIGH_SCORES = 10

finalScore.innerText = mostRecentScore

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled= !username.value
})

    var saveHighScore = e => {
        e.preventDefault()

        var score = {
            score: mostRecentScore,
            name:username.value
        }

        highScores.push(score)

        highScores.sort((a,b) => {
            return b.score - a.score
        })

        highScores.splice(10)

        localStorage.setItem("highScores", JSON.stringify(highScores));
        window.location.assign('')
    }
   
    