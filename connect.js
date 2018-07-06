//const cold = [];

//for ( let i = 0; i < 7; i++) {
    //cols.push(document.querySelectorAll(".col"));

//}

// var currentPlayer = "red";
// var nextPlayer = "black";

// var playerRedSelections = new Array();
// var playerBlackSelections = new Array();
// let grid= document.getElementById("connectGrid");

//   handleClick = function(event) {
//     console.log("click")
//     var cell = event.target;
//      //console.log(cell);
  

//     if(currentPlayer === "red" ) {
//       cell.innerHTML = "<div class='redchecker'></div>";
//       playerSelections = playerRedSelections;
//       currentPlayer = "black";
//     } else {
//       cell.innerHTML = "<div class='blackchecker'></div>";
//       playerSelections = playerBlackSelections;
//       nextPlayer = "red";
//     }
//   }
  // grid.addEventListener('click', handleClick)


  //const div = document.querySelectorAll("div")

  var currentPlayer = 'red';
  var nextPlayer = 'black';
  var temp = ""
  var playerREDSelections = new Array();
  var playerBLACKSelections = new Array();
  
  handleClick = function (event) {
     // Not sure if i'm done
     
     let cell = event.target.id;
     console.log("handleClick",cell)
     if (document.getElementById(cell).childElementCount < 7) {
         let checker = document.createElement("div")
         checker.classList.add("checker");
         checker.classList.add(currentPlayer);
         event.target.appendChild(checker)
        
         let cellElement = document.getElementById(cell);
         if (currentPlayer === "red") {
             playerSelections = playerREDSelections;
             //cellElement.className = ("red");
             temp = nextPlayer;
             nextPlayer = currentPlayer;
             currentPlayer = temp;
             
         } else {
             playerSelections = playerBLACKSelections;
             temp = nextPlayer;
             nextPlayer = currentPlayer;
             currentPlayer = temp;
         }
     }
  }

  for (i = 1; i <= 7; i++) {
     document.getElementById('col' + i).addEventListener("click", handleClick);
  }