let turn = 'x';
let last_turn = 'o'
const turn_title = document.querySelector('span')
const title = document.querySelector('.title')
turn_title.innerHTML = 'X'
const gameBoard = document.querySelector('.game-board')
let cells = []
for (let i=1; i<20; i++){
    cells[i] = document.querySelector('#item'+i)
}
function isWinner(num1,num2,num3){
    if (cells[num1].innerHTML == cells[num2].innerHTML && cells[num2].innerHTML == cells[num3].innerHTML && cells[num1].innerHTML !== '') {
        title.innerHTML = `${last_turn} Wins!!`
        setInterval(() => {
            title.innerHTML += '.'
        }, 1000);
        setTimeout(() => {
            location.reload()
        }, 4000);
         

        
    }
}
function play(id){
    let element = document.getElementById(id)

        if (element.innerHTML == '' && turn === 'x' && last_turn == 'o'){ 
            element.innerHTML = 'X'
            turn = 'o'
            last_turn = 'x'
            turn_title.innerHTML = 'O'
        }
        else if (element.innerHTML == '' && turn === 'o' && last_turn == 'x'){
            element.innerHTML = 'O'
            turn = 'x'
            last_turn = 'o'
            turn_title.innerHTML = 'X'

        }
        Winner()
    }

function Winner(){
    isWinner(1,2,3)
    isWinner(4,5,6)
    isWinner(7,8,9)
    isWinner(1,4,7)
    isWinner(2,5,8)
    isWinner(3,6,9)
    isWinner(1,5,9)
    isWinner(2,5,7)
    isWinner(3,5,7)
}
function reloadGame(){

}
play()