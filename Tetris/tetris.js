let tableRows = document.querySelectorAll('tr')
let previewRows = document.querySelectorAll('.preview-row')
let tableBody = document.querySelector('tbody')
let endScreen = document.querySelector('.game-over')
let scoreBoard = document.querySelector('.score')
let retryButton = document.querySelector('.retry')
let linesBoard = document.querySelector('.lines')
let startPauseButton = document.querySelector('.start-pause')
let start = false
let fullTable = []
let lines = 0
let score = 0

retryButton.addEventListener('click', () => location.reload())

startPauseButton.addEventListener('click', () => {
    start = !start
    if(start) startPauseButton.textContent = "PAUSE"
    else if(!start) startPauseButton.textContent = "START"
    console.log(start)
})

for (let i = 0; i < tableRows.length; i++) {
    const row = tableRows[i];
    let rowCells = []
    for (let j = 0; j < row.children.length; j++) {
        rowCells.push(row.children[j]);
    }
    fullTable.push(rowCells)
}

class LongTetro {
    constructor(rotate) {
        this.sr = 1
        this.sc = 4
        this.rotate = rotate
        this.name = "long"
        
    }

    getRotations() {
        return [
            [[this.sr+1, this.sc-1], [this.sr+1, this.sc], [this.sr+1, this.sc+1], [this.sr+1, this.sc+2]],
            [[this.sr, this.sc], [this.sr+1, this.sc], [this.sr+2, this.sc], [this.sr+3, this.sc]],
            [[this.sr+1, this.sc-1], [this.sr+1, this.sc], [this.sr+1, this.sc+1], [this.sr+1, this.sc+2]]
            [[this.sr, this.sc], [this.sr+1, this.sc], [this.sr+2, this.sc], [this.sr+3, this.sc]],
        ]
    }

    draw() {
        let rotations = this.getRotations()
        tableRows[rotations[this.rotate][0][0]].children[rotations[this.rotate][0][1]].id = this.name
        tableRows[rotations[this.rotate][1][0]].children[rotations[this.rotate][1][1]].id = this.name
        tableRows[rotations[this.rotate][2][0]].children[rotations[this.rotate][2][1]].id = this.name
        tableRows[rotations[this.rotate][3][0]].children[rotations[this.rotate][3][1]].id = this.name

        return rotations
    }

    unDraw() {
        let rotations = this.getRotations()
        tableRows[rotations[this.rotate][0][0]].children[rotations[this.rotate][0][1]].id = ""
        tableRows[rotations[this.rotate][1][0]].children[rotations[this.rotate][1][1]].id = ""  
        tableRows[rotations[this.rotate][2][0]].children[rotations[this.rotate][2][1]].id = ""  
        tableRows[rotations[this.rotate][3][0]].children[rotations[this.rotate][3][1]].id = ""  
    }
}

class SquareTetro {
    constructor(rotate) {
        this.sr = 1
        this.sc = 4
        this.rotate = rotate
        this.name = "square"
        
    }

    getRotations() {
        return [
            [[this.sr, this.sc], [this.sr, this.sc+1], [this.sr+1, this.sc], [this.sr+1, this.sc+1]],
            [[this.sr, this.sc], [this.sr, this.sc+1], [this.sr+1, this.sc], [this.sr+1, this.sc+1]],
            [[this.sr, this.sc], [this.sr, this.sc+1], [this.sr+1, this.sc], [this.sr+1, this.sc+1]],
            [[this.sr, this.sc], [this.sr, this.sc+1], [this.sr+1, this.sc], [this.sr+1, this.sc+1]]
        ]
    }

    draw() {
        let rotations = this.getRotations()
        
        tableRows[rotations[this.rotate][0][0]].children[rotations[this.rotate][0][1]].id = this.name
        tableRows[rotations[this.rotate][1][0]].children[rotations[this.rotate][1][1]].id = this.name
        tableRows[rotations[this.rotate][2][0]].children[rotations[this.rotate][2][1]].id = this.name
        tableRows[rotations[this.rotate][3][0]].children[rotations[this.rotate][3][1]].id = this.name

        return rotations
    }

    unDraw() {
        let rotations = this.getRotations()

        tableRows[rotations[this.rotate][0][0]].children[rotations[this.rotate][0][1]].id = ""  
        tableRows[rotations[this.rotate][1][0]].children[rotations[this.rotate][1][1]].id = ""  
        tableRows[rotations[this.rotate][2][0]].children[rotations[this.rotate][2][1]].id = ""  
        tableRows[rotations[this.rotate][3][0]].children[rotations[this.rotate][3][1]].id = ""  
    }
}

class LTetro {
    constructor(rotate) {
        this.sr = 1
        this.sc = 4
        this.rotate = rotate
        this.name = "l"
        
    }

    getRotations() {
        return [
            [[this.sr, this.sc-1], [this.sr+1, this.sc-1], [this.sr+1, this.sc], [this.sr+1, this.sc+1]],
            [[this.sr, this.sc], [this.sr, this.sc+1], [this.sr+1, this.sc], [this.sr+2, this.sc]],
            [[this.sr+1, this.sc-1], [this.sr+1, this.sc], [this.sr+1, this.sc+1], [this.sr+2, this.sc+1]],
            [[this.sr, this.sc+1], [this.sr+1, this.sc+1], [this.sr+2, this.sc+1], [this.sr+2, this.sc]]
        ]
    }

    draw() {
        let rotations = this.getRotations()
        
        tableRows[rotations[this.rotate][0][0]].children[rotations[this.rotate][0][1]].id = this.name
        tableRows[rotations[this.rotate][1][0]].children[rotations[this.rotate][1][1]].id = this.name
        tableRows[rotations[this.rotate][2][0]].children[rotations[this.rotate][2][1]].id = this.name
        tableRows[rotations[this.rotate][3][0]].children[rotations[this.rotate][3][1]].id = this.name

        return rotations
    }

    unDraw() {
        let rotations = this.getRotations()

        tableRows[rotations[this.rotate][0][0]].children[rotations[this.rotate][0][1]].id = ""  
        tableRows[rotations[this.rotate][1][0]].children[rotations[this.rotate][1][1]].id = ""  
        tableRows[rotations[this.rotate][2][0]].children[rotations[this.rotate][2][1]].id = ""  
        tableRows[rotations[this.rotate][3][0]].children[rotations[this.rotate][3][1]].id = ""  
    }
}

class ZTetro {
    constructor(rotate) {
        this.sr = 1
        this.sc = 4
        this.rotate = rotate
        this.name = "z"
        
    }

    getRotations() {
        return [
            [[this.sr, this.sc], [this.sr, this.sc+1], [this.sr+1, this.sc-1], [this.sr+1, this.sc]],
            [[this.sr, this.sc-1], [this.sr+1, this.sc-1], [this.sr+1, this.sc], [this.sr+2, this.sc]],
            [[this.sr, this.sc], [this.sr, this.sc+1], [this.sr+1, this.sc-1], [this.sr+1, this.sc]],
            [[this.sr, this.sc-1], [this.sr+1, this.sc-1], [this.sr+1, this.sc], [this.sr+2, this.sc]]
        ]
    }

    draw() {
        let rotations = this.getRotations()
        
        tableRows[rotations[this.rotate][0][0]].children[rotations[this.rotate][0][1]].id = this.name
        tableRows[rotations[this.rotate][1][0]].children[rotations[this.rotate][1][1]].id = this.name
        tableRows[rotations[this.rotate][2][0]].children[rotations[this.rotate][2][1]].id = this.name
        tableRows[rotations[this.rotate][3][0]].children[rotations[this.rotate][3][1]].id = this.name

        return rotations
    }

    unDraw() {
        let rotations = this.getRotations()

        tableRows[rotations[this.rotate][0][0]].children[rotations[this.rotate][0][1]].id = ""  
        tableRows[rotations[this.rotate][1][0]].children[rotations[this.rotate][1][1]].id = ""  
        tableRows[rotations[this.rotate][2][0]].children[rotations[this.rotate][2][1]].id = ""  
        tableRows[rotations[this.rotate][3][0]].children[rotations[this.rotate][3][1]].id = ""  
    }
}

class TTetro {
    constructor(rotate) {
        this.sr = 1
        this.sc = 4
        this.rotate = rotate
        this.name = "t"
        
    }

    getRotations() {
        return [
            [[this.sr, this.sc], [this.sr+1, this.sc-1], [this.sr+1, this.sc], [this.sr+1, this.sc+1]],
            [[this.sr, this.sc], [this.sr+1, this.sc], [this.sr+1, this.sc+1], [this.sr+2, this.sc]],
            [[this.sr+1, this.sc-1], [this.sr+1, this.sc], [this.sr+1, this.sc+1], [this.sr+2, this.sc]],
            [[this.sr, this.sc], [this.sr+1, this.sc], [this.sr+1, this.sc-1], [this.sr+2, this.sc]]
        ]
    }

    draw() {
        let rotations = this.getRotations()
        
        tableRows[rotations[this.rotate][0][0]].children[rotations[this.rotate][0][1]].id = this.name
        tableRows[rotations[this.rotate][1][0]].children[rotations[this.rotate][1][1]].id = this.name
        tableRows[rotations[this.rotate][2][0]].children[rotations[this.rotate][2][1]].id = this.name
        tableRows[rotations[this.rotate][3][0]].children[rotations[this.rotate][3][1]].id = this.name

        return rotations
    }

    unDraw() {
        let rotations = this.getRotations()

        tableRows[rotations[this.rotate][0][0]].children[rotations[this.rotate][0][1]].id = ""  
        tableRows[rotations[this.rotate][1][0]].children[rotations[this.rotate][1][1]].id = ""  
        tableRows[rotations[this.rotate][2][0]].children[rotations[this.rotate][2][1]].id = ""  
        tableRows[rotations[this.rotate][3][0]].children[rotations[this.rotate][3][1]].id = ""  
    }
}


const tetroes = [new LongTetro(0), new SquareTetro(0), new LTetro(0), new ZTetro(0), new TTetro(0)]


let randTetro = tetroes[Math.floor(Math.random() * tetroes.length)]
let nextRandTetro = tetroes[Math.floor(Math.random() * tetroes.length)]
switch (nextRandTetro.name) {
    case "square":
        previewRows[1].children[1].id = nextRandTetro.name
        previewRows[1].children[2].id = nextRandTetro.name
        previewRows[2].children[1].id = nextRandTetro.name
        previewRows[2].children[2].id = nextRandTetro.name
        break;
    case "long":
        previewRows[2].children[1].id = nextRandTetro.name
        previewRows[2].children[2].id = nextRandTetro.name
        previewRows[2].children[3].id = nextRandTetro.name
        previewRows[2].children[4].id = nextRandTetro.name
        break;
    case "z":
        previewRows[1].children[2].id = nextRandTetro.name
        previewRows[1].children[3].id = nextRandTetro.name
        previewRows[2].children[1].id = nextRandTetro.name
        previewRows[2].children[2].id = nextRandTetro.name
        break;
    case "t":
        previewRows[1].children[2].id = nextRandTetro.name
        previewRows[2].children[1].id = nextRandTetro.name
        previewRows[2].children[2].id = nextRandTetro.name
        previewRows[2].children[3].id = nextRandTetro.name
        break;
    case "l":
        previewRows[1].children[1].id = nextRandTetro.name
        previewRows[2].children[1].id = nextRandTetro.name
        previewRows[2].children[2].id = nextRandTetro.name
        previewRows[2].children[3].id = nextRandTetro.name
        break;

        default:
        break;
}


setInterval(() => {
    if(randTetro.getRotations()[randTetro.rotate][3][0] < 21 && start) {
        if(tableRows[randTetro.getRotations()[randTetro.rotate][3][0]+1].children[randTetro.getRotations()[randTetro.rotate][3][1]].id ||
        tableRows[randTetro.getRotations()[randTetro.rotate][3][0]+1].children[randTetro.getRotations()[randTetro.rotate][2][1]].id) {
            endScreen.style.display = "flex"
        }
        randTetro.unDraw()
        randTetro.sr += 1
        randTetro.draw()
        if(randTetro.getRotations()[randTetro.rotate].some(box => tableRows[box[0]+1].children[box[1]].classList.contains("taken"))) {
            stop()
        }
        clearRow()
    }
}, 100)

window.addEventListener('keydown', e => {
    switch (e.keyCode) {
        //DOWN
        case 40: 
            if(randTetro.getRotations()[randTetro.rotate][3][0] < 21 && start) {
                if(tableRows[randTetro.getRotations()[randTetro.rotate][3][0]+1].children[randTetro.getRotations()[randTetro.rotate][3][1]].id ||
                tableRows[randTetro.getRotations()[randTetro.rotate][3][0]+1].children[randTetro.getRotations()[randTetro.rotate][2][1]].id) {
                    endScreen.style.display = "flex"
                }
                randTetro.unDraw()
                randTetro.sr += 1
                randTetro.draw()
                if(randTetro.getRotations()[randTetro.rotate].some(box => tableRows[box[0]+1].children[box[1]].classList.contains("taken"))) {
                    stop()
                }
                clearRow()
            }
            break
        //LEFT
        case 37:
            if(randTetro.getRotations()[randTetro.rotate].every(box => box[1] > 0 && start) && 
            randTetro.getRotations()[randTetro.rotate].every(box => !tableRows[box[0]].children[box[1]-1].classList.contains("taken"))) {
                randTetro.unDraw()
                randTetro.sc -= 1
                randTetro.draw()
            }
            break;
        //RIGHT
        case 39:
            if(randTetro.getRotations()[randTetro.rotate].every(box => box[1] < 9 && start) &&
            randTetro.getRotations()[randTetro.rotate].every(box => !tableRows[box[0]].children[box[1]+1].classList.contains("taken"))) {
                randTetro.unDraw()
                randTetro.sc += 1
                randTetro.draw()
            }
            break;
        //ROTATE
        case 32:
            if(start) {
                if(randTetro.sc === 9){
                    randTetro.unDraw()
                    randTetro.sc -= 1
                    randTetro.draw()
                } 
                if(randTetro.sc === 8){
                    randTetro.unDraw()
                    randTetro.sc -= 1
                    randTetro.draw()
                } 
                if(randTetro.sc === 0){
                    randTetro.unDraw()
                    randTetro.sc += 1
                    randTetro.draw()
                } 

                if(randTetro.rotate < 3) {
                    randTetro.unDraw()
                    randTetro.rotate += 1
                    randTetro.draw()
                } else {
                    randTetro.unDraw()
                    randTetro.rotate = 0
                    randTetro.draw()
                }
                break;
            }
    }

    // console.log(e.keyCode)
})

let test = new LTetro(0)
function stop() {
    randTetro.getRotations()[randTetro.rotate].forEach(box => {
        tableRows[box[0]].children[box[1]].classList.add("taken")
        tableRows[box[0]].children[box[1]].style.borderColor = "white"
    })
    randTetro = nextRandTetro
    nextRandTetro = tetroes[Math.floor(Math.random() * tetroes.length)]
    randTetro.sr = 1
    randTetro.sc = 4
    randTetro.rotate = 0
    nextRandTetro.sr = 1
    nextRandTetro.sc = 4
    nextRandTetro.rotate = 0

    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) {
            previewRows[i].children[j].id = "m"
        }
    }

    switch (nextRandTetro.name) {
        case "square":
            previewRows[1].children[1].id = nextRandTetro.name
            previewRows[1].children[2].id = nextRandTetro.name
            previewRows[2].children[1].id = nextRandTetro.name
            previewRows[2].children[2].id = nextRandTetro.name
            break;
        case "long":
            previewRows[2].children[1].id = nextRandTetro.name
            previewRows[2].children[2].id = nextRandTetro.name
            previewRows[2].children[3].id = nextRandTetro.name
            previewRows[2].children[4].id = nextRandTetro.name
            break;
        case "z":
            previewRows[1].children[2].id = nextRandTetro.name
            previewRows[1].children[3].id = nextRandTetro.name
            previewRows[2].children[1].id = nextRandTetro.name
            previewRows[2].children[2].id = nextRandTetro.name
            break;
        case "t":
            previewRows[1].children[2].id = nextRandTetro.name
            previewRows[2].children[1].id = nextRandTetro.name
            previewRows[2].children[2].id = nextRandTetro.name
            previewRows[2].children[3].id = nextRandTetro.name
            break;
        case "l":
            previewRows[1].children[1].id = nextRandTetro.name
            previewRows[2].children[1].id = nextRandTetro.name
            previewRows[2].children[2].id = nextRandTetro.name
            previewRows[2].children[3].id = nextRandTetro.name
            break;

            default:
            break;
    }
}

let linesInArow = 0
function clearRow() {
    fullTable.forEach((row, i) => {
        if(row.every(cell => cell.className === "taken" && cell.id !== "floor")) {
            console.log("clearing");
            for(let j = 0; j < 10; j++) {
                tableRows[1].children[j].className = ""
            }
            
            tableRows[i].remove()
            linesInArow += 1
            lines += 1
            linesBoard.textContent = lines
            tableBody.insertAdjacentHTML("afterbegin", `
            <tr>
                <td class="roof"></td>
                <td class="roof"></td>
                <td class="roof"></td>
                <td class="roof"></td>
                <td class="roof"></td>
                <td class="roof"></td>
                <td class="roof"></td>
                <td class="roof"></td>
                <td class="roof"></td>
                <td class="roof"></td>
            </tr>
            `)
            
            tableRows = document.querySelectorAll('tr')
        }
    })
    switch (linesInArow) {
        case 1:
            score += 40
            scoreBoard.textContent = score
            break;
        case 2:
            score += 100
            scoreBoard.textContent = score
            break;
        case 3:
            score += 300
            scoreBoard.textContent = score
            break;
        case 4:
            score += 1200
            scoreBoard.textContent = score
            break;
    
        default:
            break;
    }
    
    fullTable = []
    for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        let rowCells = []
        for (let j = 0; j < row.children.length; j++) {
            rowCells.push(row.children[j]);
        }
        fullTable.push(rowCells)
    }
    
    linesInArow = 0
}



















































// tableRows[zTetro[2][0][0]].children[zTetro[2][0][1]].className = "z"
// tableRows[zTetro[2][1][0]].children[zTetro[2][1][1]].className = "z"
// tableRows[zTetro[2][2][0]].children[zTetro[2][2][1]].className = "z"
// tableRows[zTetro[2][3][0]].children[zTetro[2][3][1]].className = "z"

//ORIGINAL lTETRO ROTATIONS
// [[this.sr, this.sc], [this.sr, this.sc+1], [this.sr+1, this.sc], [this.sr+2, this.sc]],
// [[this.sr+1, this.sc-1], [this.sr+1, this.sc], [this.sr+1, this.sc+1], [this.sr+2, this.sc+1]],
// [[this.sr, this.sc+1], [this.sr+1, this.sc+1], [this.sr+2, this.sc+1], [this.sr+2, this.sc]],
// [[this.sr+1, this.sc-1], [this.sr+2, this.sc-1], [this.sr+2, this.sc], [this.sr+2, this.sc+1]]
