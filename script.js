const playerOneImg = document.querySelector('#player-one img')
const playerTwoImg = document.querySelector('#player-two img')
const title = document.querySelector('#winner-title')

function rollDice() {
    let playerOneRoll = Math.floor(Math.random() * (7 - 1) + 1);
    let playerTwoRoll = Math.floor(Math.random() * (7 - 1) + 1);
    console.log(playerOneRoll)
    console.log(playerTwoRoll)


    const playerOneSrc = './images/dice' + playerOneRoll + '.png'
    const playerTwoSrc = './images/dice' + playerTwoRoll + '.png'


    playerOneImg.src=playerOneSrc
    playerTwoImg.src=playerTwoSrc

    if (playerOneRoll == 1 && playerTwoRoll == 1) {
        title.innerText = 'SNAKE EYES!';
    } else if (playerOneRoll > playerTwoRoll) {
        title.innerText = 'The winner is, Player One!';
    } else if (playerOneRoll < playerTwoRoll) {
        title.innerText = 'The winner is, Player Two!';
    } else {
        title.innerText = "It's a draw!";
    }


}

document.getElementById('roll-btn').onclick = rollDice;
