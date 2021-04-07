document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector(`.grid`)
    let squares = Array.from (document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const Startbtn = document.querySelector('#start-pause')
    const width = 10

    //the Tetrominoes
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2*2]
    ]
const tTetromino = [
    [1, width+1, width+1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
]
const oTetromino = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
]
const zTetromino = [

[0, width, width+1, width*2+1],
[width+1, width+2, width*2, width*2+1],
[0,width, width+1, width*2+1],
[width+1, width+2, width*2, width*2+1]
]

const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
]

const theTetrominos =[lTetromino, tTetromino, oTetromino, zTetromino, iTetromino]

let currentPosition = 4 
let currentRotation = 0

//Select Tetrominos randomly
let random = Math.floor(Math.random()*theTetrominos.length)
console.log(random)
let current = theTetrominos[random][currentRotation]   
    
    //draw the first rotation in the first tetromino
    function draw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.add(`tetromino`)
                })
    } 
    console.log(squares)

    //undrew the Tetromino
    function undraw() {
        current.forEach(index =>{
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }

    //Tetromino movements

    timerId = setInterval(moveDown, 1000)

    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }
// freeze function
function freeze() {
    if(current.some(index => squares [currentPosition + index + width].classList.contains(`taken`))) {
        current.forEach (index => squares [currentPosition + index].classList.add(`taken`))
        
        //new Tetromino falling
random =Math.floor(Math.random()(theTetrominos.length))
current = theTetrominos[random] [currentRotation]
CurrentPosition = 4
draw()
    }
}
})