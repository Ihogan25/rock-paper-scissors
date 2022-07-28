//buttons and choices
let humanRock = document.getElementById('rock');
let humanPaper = document.getElementById('paper');
let humanScissors = document.getElementById('scissors');
let resetBtn = document.getElementById('reset');
let computer = document.getElementById('computer-choice')
let humanChoice = document.getElementById('human-choice')

//scores
let final = document.getElementById('final');
let humanScore = document.getElementById('human-score');
let computerScore = document.getElementById('computer-score');

//  computer choice //
const computerChoice = function() {
    let choice = '';
    const choices = ['Computer Choice: Rock', 'Computer Choice: Paper', 'Computer Choice: Scissors'];
    let num = Math.floor(Math.random() * 3);
    choice = choices[num];
    return choice;
}
let scoreOne = 0;
let scoreTwo = 0;
const toWin = 5;

const game  = function () {
    
    
if  (humanChoice.textContent !== 'Human Choice: Rock') {

        humanRock.addEventListener('click', function(){

        humanChoice.textContent = 'Human Choice: Rock';

        computer.textContent = computerChoice();

})}; 

if(humanChoice.textContent !== 'Human Choice: Paper') {
        humanPaper.addEventListener('click', function(){

        humanChoice.textContent = 'Human Choice: Paper';

        computer.textContent = computerChoice();

})}; 

if(humanChoice.textContent !== 'Human Choice: Scissors')

        humanScissors.addEventListener('click', function(){

        humanChoice.textContent = 'Human Choice: Scissors';

        computer.textContent = computerChoice();


    });

};



game();













