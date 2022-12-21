
let hScore = document.getElementById("score")
let score = 0
let count = 0
let gScore = document.getElementById("g-score")

function addone(){
    score += 1
    hScore.textContent = score
}
function addtwo(){
   score += 2
   hScore.textContent = score
}
function addthree(){
    score += 3
    hScore.textContent = score
}
function gaddone(){
    count += 1
    gScore.textContent = count
}
function gaddtwo(){
    count += 2
    gScore.textContent = count
}
function gaddthree(){
    count += 3
    gScore.textContent = count
}