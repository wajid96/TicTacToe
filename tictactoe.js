//JS code goes here
var turn = false;
function play(event) {
  console.log(event);
  event.target.innerHTML = turn? "O" : "X";
  turn = !turn;
}

//var cell0 = document.getElementById("0");
//cell0.addEventListener('click',play);
