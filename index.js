const main = document.querySelector("#root")
main.className = "main"
const board = document.createElement("section")
board.className = "board"
const target = document.createElement("div")
target.className = "target"
const catcher = document.createElement("div")
catcher.className = "catcher"
board.append(target, catcher)


const counter = document.createElement("section")
counter.className = "counter"
const count = document.createElement("div")
count.className = "count"
count.textContent = 0
counter.append(count)


main.append(board, counter)


let targetPosition = {x: 20, y: 20, yd: 2, xd: 4}

target.style.top = targetPosition.y + "%"
target.style.left = targetPosition.x + "%"

// setInterval(()=>{
//     targetPosition.y += targetPosition.yd
//     if(targetPosition.y >= 92){
//         targetPosition.yd = -2
//     }
//     if(targetPosition.y === 0){
//         targetPosition.yd = 2
//     }
//     target.style.top = targetPosition.y + "%"

//     targetPosition.x += targetPosition.xd
//     if(targetPosition.x >= 95){
//         targetPosition.xd = -1
//     }
//     if(targetPosition.x === 0){
//         targetPosition.xd = 1
//     }
//     target.style.left = targetPosition.x + "%"

//     if(catcherPosition.y + 8  === targetPosition.y && catcherPosition.x  === targetPosition.x){
//         catcher.style.background = "red"
//     }else{
//         catcher.style.background = "white"
//     }

// },1000)


let catcherPosition = {x: 0, y: 0, yd: 2, xd: 2}
catcher.style.left = catcherPosition.x + "%"
document.addEventListener('keydown', (e)=>{
    // console.log("CATCHER: ", catcher.style.left)

    if(e.key === "ArrowRight" && catcherPosition.x < 96 ){
        
        catcherPosition.x += catcherPosition.xd
        catcher.style.left = catcherPosition.x + "%"
    }
    if(e.key === "ArrowLeft" && catcherPosition.x > 0){
       
        catcherPosition.x -= catcherPosition.xd
        catcher.style.left = catcherPosition.x + "%"
    }
    if(e.key === "ArrowDown" && catcherPosition.y < 84 ){
        
        catcherPosition.y += catcherPosition.yd
        catcher.style.top = catcherPosition.y + "%"
    }
    if(e.key === "ArrowUp" && catcherPosition.y > -8){
       
        catcherPosition.y -= catcherPosition.yd
        catcher.style.top = catcherPosition.y + "%"
    }


console.log("CATCHER left: ", catcherPosition.x)
console.log("CATCHER top: ", catcherPosition.y + 8)
console.log("....")
console.log("TARGET left: ", targetPosition.x)
console.log("TARGET top: ", targetPosition.y)
console.log("------------------")
    
        if(catcherPosition.y + 8  === targetPosition.y && catcherPosition.x  === targetPosition.x){
        catcher.style.background = "red"
    }else{
        catcher.style.background = "white"
    }
})


