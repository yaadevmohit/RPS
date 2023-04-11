// declaring global variables
const playerRounds = document.querySelector("#player-rounds");
const computerRounds = document.querySelector("#ai-rounds");
const aiHand = document.querySelector("#move-1")
const humanHand = document.querySelector("#move-2")
playerRounds.textContent = "1"
aiHand.src = "img/ai-rock.jpeg"
humanHand.src = "img/human-scissors.jpeg"

// looping until someone wins 5 rounds
// while (playerRounds < 5 && computerRounds < 5) {
//     // getting choices from both sides

//     function getComputerChoice() {
//     let computerChoice = choices[Math.floor(Math.random()*choices.length)]
//     return computerChoice
//     };

//     computerSelection = getComputerChoice();
//     // comparing choices and deciding the round winner
//     if (computerSelection === playerSelection) {
//         console.log(`player chose: ${playerSelection} computer chose: ${computerSelection}`)
//         console.log("It's a tie!!")
//     }
//     else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
//         computerRounds+=1
//         console.log(`player chose: ${playerSelection} computer chose: ${computerSelection}`)
//         console.log("This round goes to computer")
//         console.log(`Player: ${playerRounds} Computer: ${computerRounds}`)
//     }
//     else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
//         computerRounds+=1
//         console.log(`player chose: ${playerSelection} computer chose: ${computerSelection}`)
//         console.log("This round goes to computer")
//         console.log(`Player: ${playerRounds} Computer: ${computerRounds}`)
//     }    
//     else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
//         computerRounds+=1
//         console.log(`player chose: ${playerSelection} computer chose: ${computerSelection}`)
//         console.log("This round goes to computer")
//         console.log(`Player: ${playerRounds} Computer: ${computerRounds}`)
//     }
//     else {
//         console.log(`player chose: ${playerSelection} computer chose: ${computerSelection}`)
//         playerRounds+=1
//         console.log(`Player: ${playerRounds} Computer: ${computerRounds}`)
//         console.log("This round goes to MY NIGGA")
//     }
// };

// // Checking who won 5 rounds
// if (playerRounds === 5 ) {
//     alert("Player won")
//     console.log("my nigga won!!!!!!")
// }
// else if (computerRounds === 5) {
//     alert("Computer won")
//     console.log("technology took over")
// }


