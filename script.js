const input = document.querySelector('#input')
const playerName = document.querySelector('#name')
const playingName = document.querySelector('#playerName')
const assignName = document.querySelector('#givenName')
const body = document.querySelector('#body')
const scores = document.querySelector('.scores')
const welcome = document.querySelector('#welcome')
const container = document.querySelector('.container')
const startBtn = document.querySelector('#startGame')
const guessBtn = document.querySelector('#guessbtn')
const tryagainBtn = document.querySelector('#tryagainbtn')
const msg = document.querySelector('#msg')
const score = document.querySelector('#score')
const highScore = document.querySelector('#high')
let random = Math.ceil(Math.random() * 10)
startBtn.addEventListener('click', () => {
    var givenName = playerName.value
    playerName.style.display = 'none'
    assignName.innerText = "welcome " + givenName
    function remove() {
        container.classList.remove('hide')
        scores.classList.remove('hide')
        welcome.style.display = 'none'
        playingName.innerText = givenName
    }
    setTimeout(remove, 3000)
})
guessBtn.addEventListener('click', () => {
    var value = +input.value
    var scoreval = +score.innerText
    var highval = +highScore.innerText
    console.log(random)
    if (isNaN(value)) {
        alert('Please enter valid number')
    }
    else if (value == '') {
        alert('Please enter something')
    }
    else if (value < 0 || value > 10) {
        alert('Please enter the number in specified range')
        input.value = ''
    }
    else {
        if (value == random) {
            highval = scoreval
            highScore.innerText = highval < 10 ? '0' + highval : highval
            msg.innerText = 'Yay ! you have guessed it right'
            body.style.backgroundColor = '#3cb371'
            input.value = ''
        }
        else {
            scoreval = scoreval - 1
            msg.innerText = 'Nope! Try again'
            tryagainBtn.classList.remove('tryhide')
            body.style.backgroundColor = 'rgb(231, 80, 54)'
            if (scoreval < 0) {
                alert("Sorry , you've lost the game please restart !")
            } else {
                score.innerText = scoreval < 10 ? '0' + scoreval : scoreval
            }
        }
    }
})
tryagainBtn.addEventListener('click', () => {
    random = Math.ceil(Math.random() * 10)
    console.log(random)
    scoreval = 20
    score.innerText = scoreval
    input.value = ''
    msg.innerText = ''
    body.style.backgroundColor = '#2c323d'
})