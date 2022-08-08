//variable slectors
const options = document.querySelectorAll(".options")
const body = document.querySelector('body')
const human = document.querySelector('.human');
const computer = document.querySelector('.computer');
const winner = document.querySelector('.winner')
const compChoice = document.querySelector('.compChoice')
const round= document.querySelector('.round')


//computer slection
function computerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        compChoice.textContent = choices[Math.floor(Math.random() * 3)];
};
//round and scores
let computerScore = 0;
let humanScore = 0;
let roundNum = 0;

//Function for each Option
options.forEach(option=> {
        option.addEventListener('click', function() {
                //run the game if round is less than 5
               if(roundNum < 5) {
                        //each time a human choice is selected call computerchoice
                        computerChoice()
                        //then if block runs to compare human to computer choice
                        if(option.textContent === compChoice.textContent) {
                                console.log('tie')
                        } else if(
                                (option.textContent === 'Rock' && compChoice.textContent === 'Scissors') ||
                                (option.textContent === 'Paper' && compChoice.textContent === 'Rock') ||
                                (option.textContent === 'Scissors' && compChoice.textContent === 'Paper')) 
                                {
                                        console.log('Human')
                                        humanScore++
                                        human.textContent = `Human: ${humanScore}`
                        } else {          
                                console.log('Computer')
                                computerScore++;
                                computer.textContent = `Computer: ${computerScore}`
                        }
                //inscrase round each time human clicks an option         
               roundNum++;
               round.textContent = `Round: ${roundNum}`;

                //only runs when round limit is reached
                } else if(roundNum === 5) {
                        if(humanScore === computerScore) {
                                winner.textContent = 'Result: Draw'
                        } else if(humanScore > computerScore) {
                                winner.textContent = 'Result: Humans Win!'
                        } else if(humanScore < computerScore) {
                                winner.textContent = 'Result: Computers Win!'
                        }
                }
        })
})




