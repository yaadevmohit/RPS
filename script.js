// declaring global variables
const computerRounds = document.querySelector("#computer-count");
const playerRounds = document.querySelector("#player-count");
const aiHand = document.querySelector("#move-1")
const humanHand = document.querySelector("#move-2")
const humanButtons = document.querySelectorAll('.human-button');
const result = document.querySelector('#final-result');
const title = document.querySelector(".battlefield.title")
const resultsDictionary = {
    'rock': {
        'rock': 'tie',
        'paper': 'computer',
        'scissors': 'player'
    },
    'paper': {
        'rock': 'player',
        'paper': 'tie',
        'scissors': 'computer'
    },
    'scissors': {
        'rock': 'computer',
        'paper': 'player',
        'scissors': 'tie'
}
}
function getAIChoice() {
    let choices = Object.keys(resultsDictionary)
    let AIChoice = choices[Math.floor(Math.random() * choices.length)]
    return AIChoice
}


humanButtons.forEach((button) => {
    button.addEventListener('click', () => {
        humanHand.src = `img/human-${button.id}.png`
        computerInput = getAIChoice()
        aiHand.src = `img/ai-${computerInput}.png`
        if (resultsDictionary[button.id][computerInput] === "player") {
            playerRounds.textContent = parseInt(playerRounds.textContent) +1
            result.textContent = "Robot: One more round pls"
        }
        if (resultsDictionary[button.id][computerInput] === "computer") {
            computerRounds.textContent = parseInt(computerRounds.textContent) + 1
            result.textContent = "Robot: HAHAHAHAHAAHAHAHAHa one more?"
        }
        if (computerRounds.textContent === "5") {
            for(let i = 0; i < humanButtons.length; i++) {
                humanButtons[i].disabled = true;
            }
            result.textContent = "Robot: LOSER! Got beaten by a computer!!"
            const restart = document.createElement("button")
            restart.setAttribute('id', 'restart-button')
            restart.textContent = "Reset Game"
            restart.addEventListener('click', () => window.location.reload())
            document.body.append(restart)
        }
        if (playerRounds.textContent === "5") {
            for(let i = 0; i < humanButtons.length; i++) {
                humanButtons[i].disabled = true;
            }            
            result.textContent = "Robot: YOU WON LUCKY BASTARD!!!"
            const restart = document.createElement("button")
            restart.setAttribute('id', 'restart-button')
            restart.textContent = "Reset Game"
            restart.addEventListener('click', () => window.location.reload())
            document.body.append(restart)
        } 

    })
})

