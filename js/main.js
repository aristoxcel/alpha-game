const home = document.getElementById("home");
const play = home.nextElementSibling;
const score = play.nextElementSibling;
const alphaBoard = document.getElementById("alpha-board");

let keyboard =document.getElementById("keyboard")
let firstRow = keyboard.firstElementChild;
let secondRow =firstRow.nextElementSibling;
let thirdRow = secondRow.nextElementSibling;

let findingKey= function(e){
    alphaBoard.innerText = e.target.innerText;
    e.target.classList.add("bg-[#FFA500]");
    setTimeout(() => e.target.classList.remove("bg-[#FFA500]"), 1000);
 }

function playGame(){
    firstRow.addEventListener("click", findingKey);
    secondRow.addEventListener("click", findingKey);
    thirdRow.addEventListener("click", findingKey);
}

function playNow(){
    home.classList.add("hidden");
    play.classList.remove("hidden")
    playGame()
}

