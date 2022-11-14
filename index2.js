const main = document.querySelector("#root");
main.className = "main";
const board = document.createElement("section");
board.className = "board";
const target = document.createElement("div");
target.className = "target";
const catcher = document.createElement("div");
catcher.className = "catcher";
board.append(target, catcher);

const counter = document.createElement("section");
counter.className = "counter";
const catcherHeader = document.createElement("h1")
catcherHeader.textContent = "Catcher Score:"
const catcherCount = document.createElement("div");
catcherCount.className = "catcherCount";
catcherCount.textContent = 0;
catcherHeader.append(catcherCount)

const targetHeader = document.createElement("h1")
targetHeader.textContent = "Target Score:"
const targetCount = document.createElement("div");
targetCount.className = "targetCount";
targetCount.textContent = 0;
targetHeader.append(targetCount)

const directionBox = document.createElement("section")
directionBox.className = "directionBox"
const upBox = document.createElement("div")
upBox.textContent = "⬆"
const downBox = document.createElement("div")
downBox.textContent = "⬇"
const leftRightBox = document.createElement("div")
leftRightBox.className = "leftRightBox"
const leftDiv = document.createElement("div")
leftDiv.textContent = "⬅"
const rightDiv = document.createElement("div")
rightDiv.textContent = "⮕"
leftRightBox.append(leftDiv,rightDiv)
directionBox.append(upBox,leftRightBox,downBox)


board.append(directionBox)
counter.append(catcherHeader, targetHeader);

main.append(counter, board);

let targetPosition = { x: 20, y: 20, yd: 2, xd: 4 };

target.style.top = targetPosition.y + "%";
target.style.left = targetPosition.x + "%";

setInterval(() => {
  targetPosition.y += targetPosition.yd;
  if (targetPosition.y >= 45) {
    targetPosition.yd = -1;
  }
  if (targetPosition.y <= -45) {
    targetPosition.yd = 1;
  }
  target.style.top = targetPosition.y + "%";

  targetPosition.x += targetPosition.xd;
  if (targetPosition.x >= 50) {
    targetPosition.xd = -1;
  }
  if (targetPosition.x === -45) {
    targetPosition.xd = 1;
  }
  target.style.left = targetPosition.x + "%";
  
  if (
    catcherPosition.y === targetPosition.y &&
    catcherPosition.x + 5 === targetPosition.x
  ) {
    targetCount.textContent ++
  } 
}, 1000);


let catcherPosition = { x: 0, y: 0, yd: 1, xd: 1 };
catcher.style.left = catcherPosition.x + "%";


const mixArray = (arr)=>{
let mixedArr = []
while(mixedArr.length < arr.length){
let random = Math.floor(Math.random() * arr.length)
if(!mixedArr.includes(arr[random])){
    mixedArr.push(arr[random])
}
}
return mixedArr
}

let arr = ["arrowUp","arrowDown","arrowLeft","arrowRight"]

console.log("BOOOOBBENNNBER: ", mixArray(arr))

let directionArray = ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]

let directionArrayX = [{"ArrowUp":"⬆"},{"ArrowDown":"⬇"},{"ArrowLeft":"⬅"},{"ArrowRight":"⮕"}]
document.addEventListener("keydown", (e) => {
    // let directionArray = ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]
    if (
        catcherPosition.y === targetPosition.y &&
        catcherPosition.x + 5 === targetPosition.x
      ) {
        catcherCount.textContent ++
        catcher.style.background = "red";
        
        targetPosition.yd = targetPosition.yd * -1;
        targetPosition.xd = targetPosition.xd * -1;
       

       directionArrayX =  mixArray(directionArrayX)

    rightDiv.textContent = Object.values(directionArrayX[3])
    leftDiv.textContent = Object.values(directionArrayX[2])
    downBox.textContent = Object.values(directionArrayX[1])
    upBox.textContent = Object.values(directionArrayX[0])
      }

      console.log("DIRECT: ", Object.keys(directionArrayX[1]).toString())


  

    if (e.key === Object.keys(directionArrayX[3]).toString()) {
        catcherPosition.x += catcherPosition.xd;
        // rightDiv.textContent = Object.values(directionArrayX[3])
      }
      if (e.key === Object.keys(directionArrayX[2]).toString()) {
        catcherPosition.x -= catcherPosition.xd;
        // leftDiv.textContent = Object.values(directionArrayX[2])
      }
    
      catcher.style.left = catcherPosition.x + "%";
    
      if (e.key === Object.keys(directionArrayX[1]).toString()) {
        catcherPosition.y += catcherPosition.yd;
        // downBox.textContent = Object.values(directionArrayX[1])
      }
      if (e.key === Object.keys(directionArrayX[0]).toString()) {
        catcherPosition.y -= catcherPosition.yd;
        // upBox.textContent = Object.values(directionArrayX[0])
        
      }
      catcher.style.top = catcherPosition.y + "%";

    // if (
    //   catcherPosition.y === targetPosition.y &&
    //   catcherPosition.x + 5 === targetPosition.x
    // ) {
    //   catcherCount.textContent ++
    //   catcher.style.background = "red";
      
     
    //  console.log("DIRECT: ", directionArray)
    //  directionArray =  mixArray(directionArray)
    //  console.log("MIXED: ", directionArray)
    // }
  });