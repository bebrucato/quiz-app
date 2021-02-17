var highScoresList = document.querySelector("#highScoresList");
var highScores= JSON.parse(localStorage.getItem("highScores")) || [];
var clear = document.querySelector("#clear");

highScoresList.innerHTML=highScores.map(score => {
    return `<li class='high-scores'>${score.name} - ${score.score}</li>`
}).join('')

  
   clear.addEventListener("click", () => {
       localStorage.clear();
       highScoresList.innerHTML=""
   })

