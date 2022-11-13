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
// let catcherScore = catcherCount.textContent
catcherHeader.append(catcherCount)

const targetHeader = document.createElement("h1")
targetHeader.textContent = "Target Score:"
const targetCount = document.createElement("div");
targetCount.className = "targetCount";
targetCount.textContent = 0;
let targetScore = targetCount.textContent
targetHeader.append(targetCount)
// const targetHeader = document.createElement("h1")
// targetHeader.textContent = "Target Score:"
// targetCount.append(targetHeader)


counter.append(catcherHeader, targetHeader);

main.append(board, counter);

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
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    catcherPosition.x += catcherPosition.xd;
  }
  if (e.key === "ArrowLeft") {
    catcherPosition.x -= catcherPosition.xd;
  }

  catcher.style.left = catcherPosition.x + "%";

  if (e.key === "ArrowDown") {
    catcherPosition.y += catcherPosition.yd;
  }
  if (e.key === "ArrowUp") {
    catcherPosition.y += catcherPosition.yd * -1;
  }
  catcher.style.top = catcherPosition.y + "%";

//   console.log("CATCHER left: ", catcherPosition.x);
//   console.log("CATCHER top: ", catcherPosition.y + 8);
//   console.log("....");
//   console.log("TARGET left: ", targetPosition.x);
//   console.log("TARGET top: ", targetPosition.y);
//   console.log("------------------");

  if (
    catcherPosition.y === targetPosition.y &&
    catcherPosition.x + 5 === targetPosition.x
  ) {
    catcherCount.textContent ++
    catcher.style.background = "red";
    catcherPosition.yd = catcherPosition.yd * -1;
    catcherPosition.xd = catcherPosition.xd * -1;

    targetPosition.yd = targetPosition.yd * -1;
    targetPosition.xd = targetPosition.xd * -1;
  } else {
    catcher.style.background = "white";
  }

  // if(catcherPosition.y  === targetPosition.y && catcherPosition.x + 5 === targetPosition.x){
  // if(catcherPosition.x < 45){
  //    catcher.style.background = "red"
  //     // catcherPosition.yd = (catcherPosition.yd *-1)
  //     // catcherPosition.xd = (catcherPosition.xd *-1)

  //     // targetPosition.yd = (targetPosition.yd *-1)
  //     // targetPosition.xd = (targetPosition.xd *-1)

  //     if(e.key === "ArrowRight"){
  //     catcherPosition.x -= catcherPosition.xd
  //         // catcher.style.left = catcherPosition.x + "%"
  //     }

  // }
  // if(catcherPosition.x > -50){
  //     if(e.key === "ArrowLeft"){
  //     catcherPosition.x += catcherPosition.xd
  //     // catcher.style.left = catcherPosition.x + "%"
  //     }
  // }
  // catcher.style.left = catcherPosition.x + "%"

  // if(e.key === "ArrowDown" && catcherPosition.y < 45 ){

  //     catcherPosition.y += catcherPosition.yd
  //     catcher.style.top = catcherPosition.y + "%"
  // }
  // if(e.key === "ArrowUp" && catcherPosition.y > -45){

  //     catcherPosition.y += (catcherPosition.yd * -1)
  //     catcher.style.top = catcherPosition.y + "%"
  // }

  // }
});
