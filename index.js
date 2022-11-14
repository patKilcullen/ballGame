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

// setInterval(() => {
//   targetPosition.y += targetPosition.yd;
//   if (targetPosition.y >= 45) {
//     targetPosition.yd = -1;
//   }
//   if (targetPosition.y <= -45) {
//     targetPosition.yd = 1;
//   }
//   target.style.top = targetPosition.y + "%";

//   targetPosition.x += targetPosition.xd;
//   if (targetPosition.x >= 50) {
//     targetPosition.xd = -1;
//   }
//   if (targetPosition.x === -45) {
//     targetPosition.xd = 1;
//   }
//   target.style.left = targetPosition.x + "%";
  
//   if (
//     catcherPosition.y === targetPosition.y &&
//     catcherPosition.x + 5 === targetPosition.x
//   ) {
//     targetCount.textContent ++
//   } 
// }, 1000);


let catcherPosition = { x: 0, y: 0, yd: 1, xd: 1 };
catcher.style.left = catcherPosition.x + "%";

let up = catcherPosition.y += catcherPosition.yd * -1
let down = catcherPosition.y += catcherPosition.yd;
let left = catcherPosition.x -= catcherPosition.xd;
let right = catcherPosition.x += catcherPosition.xd;


// HEEEERRRREEEEEE
// turn this into a function???  (I wrapped the logic in a function)
// What would the parameters be?
// maybe have to use stringify first before can use json.parse

// const getDirections = ()=>{


// let directionArray = []
// while(directionArray.length < 4){
//     let randomDirection = Math.floor(Math.random() * 4)
//     // if(randomDirection === 0){
//     //     // randomDirection = "catcherPosition.y += catcherPosition.yd * -1"
//     //     randomDirection = catcherPosition.y -= catcherPosition.yd
//     // }
//     // if(randomDirection === 1){
//     //     randomDirection = catcherPosition.y += catcherPosition.yd;
//     // }
//     // if(randomDirection === 2){
//     //     randomDirection = catcherPosition.x -= catcherPosition.xd;
//     // }
//     // if(randomDirection === 3){
//     //     randomDirection = catcherPosition.x += catcherPosition.xd;
//     // }
//   if(randomDirection === 0){
//         // randomDirection = "catcherPosition.y += catcherPosition.yd * -1"
//         randomDirection = "ArrowUp"
//     }
//     if(randomDirection === 1){
//         randomDirection = "ArrowDown"
//     }
//     if(randomDirection === 2){
//         randomDirection = "ArrowRight"
//     }
//     if(randomDirection === 3){
//         randomDirection = "ArrowLeft"
//     }
    
//     if(!directionArray.includes(randomDirection)){
//     directionArray.push(randomDirection)
//     }

// }
// console.log("DIR 0", directionArray[0])
// console.log("DIR 1",directionArray[1])
// console.log("DIR 2",directionArray[2])
// console.log("DIR 3",directionArray[3])


// let catcherPosition = { x: 0, y: 0, yd: 1, xd: 1 };
// catcher.style.left = catcherPosition.x + "%";
// document.addEventListener("keydown", (e) => {
//   if (e.key === "ArrowRight") {
//     catcherPosition.x += catcherPosition.xd;
//   }
//   if (e.key === "ArrowLeft") {
//     catcherPosition.x -= catcherPosition.xd;
//   }

//   catcher.style.left = catcherPosition.x + "%";

//   if (e.key === "ArrowDown") {
//     catcherPosition.y += catcherPosition.yd;
//   }
//   if (e.key === "ArrowUp") {
//     catcherPosition.y -= catcherPosition.yd;
//     // catcherPosition.y += catcherPosition.yd * -1;
//   }
//   catcher.style.top = catcherPosition.y + "%";

// //   if (
// //     catcherPosition.y === targetPosition.y &&
// //     catcherPosition.x + 5 === targetPosition.x
// //   ) {
// //     catcherCount.textContent ++
// //     catcher.style.background = "red";
// //     catcherPosition.yd = catcherPosition.yd * -1;
// //     catcherPosition.xd = catcherPosition.xd * -1;

// //     targetPosition.yd = targetPosition.yd * -1;
// //     targetPosition.xd = targetPosition.xd * -1;
// //   } else {
// //     catcher.style.background = "white";
// //   }




//   if (
//     catcherPosition.y === targetPosition.y &&
//     catcherPosition.x + 5 === targetPosition.x
//   ) {
    

//     catcherCount.textContent ++
//     catcher.style.background = "red";
//     let directionArray = []
//     while(directionArray.length < 4){
//         let randomDirection = Math.floor(Math.random() * 4)
//       if(randomDirection === 0){
//             randomDirection = "ArrowUp"
//         }
//         if(randomDirection === 1){
//             randomDirection = "ArrowDown"
//         }
//         if(randomDirection === 2){
//             randomDirection = "ArrowRight"
//         }
//         if(randomDirection === 3){
//             randomDirection = "ArrowLeft"
//         }
//         if(!directionArray.includes(randomDirection)){
//         directionArray.push(randomDirection)
//         }
   
//     }
//     console.log("ERECTION ARRAY", directionArray)
//     console.log(directionArray[0])
//     console.log(directionArray[1])
//     console.log(directionArray[2])
//     console.log(directionArray[3])
//     // document.addEventListener("keydown", (e) => {
//         if (e.key === directionArray[0]) {
//             console.log("one",directionArray[0] )
//           catcherPosition.x += catcherPosition.xd;
//           catcher.style.left = catcherPosition.x + "%";
//         }
//         if (e.key === directionArray[1] ) {
//             console.log("two",directionArray[1] )
//           catcherPosition.x -= catcherPosition.xd;
//           catcher.style.left = catcherPosition.x + "%";
//         }
//         if (e.key === directionArray[2]) {
//             console.log("twee",directionArray[2] )
//           catcherPosition.y += catcherPosition.yd;
//           catcher.style.top = catcherPosition.y + "%";
//         }
//         if (e.key === directionArray[3]) {
//             console.log("fo",directionArray[3] )
//           catcherPosition.y -= catcherPosition.yd;
//           // catcherPosition.y += catcherPosition.yd * -1;
//           catcher.style.top = catcherPosition.y + "%";
//         }
//         // catcher.style.top = catcherPosition.y + "%";
//         // catcher.style.left = catcherPosition.x + "%";
//     // })
//   } else {
//     catcher.style.background = "white";
//   }
// });







document.addEventListener("keydown", (e) => {
    let directionArray = []
    while(directionArray.length < 4){
        let randomDirection = Math.floor(Math.random() * 4)
      if(randomDirection === 0){
            randomDirection = "ArrowUp"
        }
        if(randomDirection === 1){
            randomDirection = "ArrowDown"
        }
        if(randomDirection === 2){
            randomDirection = "ArrowRight"
        }
        if(randomDirection === 3){
            randomDirection = "ArrowLeft"
        }
        if(!directionArray.includes(randomDirection)){
        directionArray.push(randomDirection)
        }
   
    }
    console.log("ERECTION ARRAY", directionArray)
    console.log(directionArray[0])
    console.log(directionArray[1])
    console.log(directionArray[2])
    console.log(directionArray[3])

    if (e.key === directionArray[0]) {
        catcherPosition.x += catcherPosition.xd;
      }
      if (e.key === directionArray[1]) {
        catcherPosition.x -= catcherPosition.xd;
      }
    
      catcher.style.left = catcherPosition.x + "%";
    
      if (e.key === directionArray[2]) {
        catcherPosition.y += catcherPosition.yd;
      }
      if (e.key === directionArray[3]) {
        catcherPosition.y -= catcherPosition.yd;
        // catcherPosition.y += catcherPosition.yd * -1;
      }
      catcher.style.top = catcherPosition.y + "%";














    // if (e.key === "ArrowRight") {
    //   catcherPosition.x += catcherPosition.xd;
    // }
    // if (e.key === "ArrowLeft") {
    //   catcherPosition.x -= catcherPosition.xd;
    // }
  
    // catcher.style.left = catcherPosition.x + "%";
  
    // if (e.key === "ArrowDown") {
    //   catcherPosition.y += catcherPosition.yd;
    // }
    // if (e.key === "ArrowUp") {
    //   catcherPosition.y -= catcherPosition.yd;
    //   // catcherPosition.y += catcherPosition.yd * -1;
    // }
    // catcher.style.top = catcherPosition.y + "%";

    if (
      catcherPosition.y === targetPosition.y &&
      catcherPosition.x + 5 === targetPosition.x
    ) {
      
  
      catcherCount.textContent ++
      catcher.style.background = "red";
    //   let directionArray = []
    //   while(directionArray.length < 4){
    //       let randomDirection = Math.floor(Math.random() * 4)
    //     if(randomDirection === 0){
    //           randomDirection = "ArrowUp"
    //       }
    //       if(randomDirection === 1){
    //           randomDirection = "ArrowDown"
    //       }
    //       if(randomDirection === 2){
    //           randomDirection = "ArrowRight"
    //       }
    //       if(randomDirection === 3){
    //           randomDirection = "ArrowLeft"
    //       }
    //       if(!directionArray.includes(randomDirection)){
    //       directionArray.push(randomDirection)
    //       }
     
    //   }
    //   console.log("ERECTION ARRAY", directionArray)
    //   console.log(directionArray[0])
    //   console.log(directionArray[1])
    //   console.log(directionArray[2])
    //   console.log(directionArray[3])
      // document.addEventListener("keydown", (e) => {
          if (e.key === directionArray[0]) {
              console.log("one",directionArray[0] )
            catcherPosition.x += catcherPosition.xd;
            catcher.style.left = catcherPosition.x + "%";
          }
          if (e.key === directionArray[1] ) {
              console.log("two",directionArray[1] )
            catcherPosition.x -= catcherPosition.xd;
            catcher.style.left = catcherPosition.x + "%";
          }
          if (e.key === directionArray[2]) {
              console.log("twee",directionArray[2] )
            catcherPosition.y += catcherPosition.yd;
            catcher.style.top = catcherPosition.y + "%";
          }
          if (e.key === directionArray[3]) {
              console.log("fo",directionArray[3] )
            catcherPosition.y -= catcherPosition.yd;
            // catcherPosition.y += catcherPosition.yd * -1;
            catcher.style.top = catcherPosition.y + "%";
          }
          // catcher.style.top = catcherPosition.y + "%";
          // catcher.style.left = catcherPosition.x + "%";
      // })
    } else {
      catcher.style.background = "white";
    }
  });