var boxesArray =
[ "*", true, true,
  true, true, true,
  true, true, true,
  true, true, true,
];

function drawDom() {
  document.getElementById('boxes').innerText = "";
  for(var i = 0; i < boxesArray.length; i++) {
    var divNew = document.createElement('div');
    if(boxesArray[i] === "*"){
        divNew.classList.add("box");
        divNew.classList.add("active");
      }
      else if (boxesArray[i] === true) {
        divNew.classList.add("box");
      }
    var container = document.getElementById("boxes");
    container.appendChild(divNew);
    }
  }
drawDom();

document.addEventListener("keydown", move);

function move() {
  if (event.keyCode === 38) {
    moveUp();
  } else if (event.keyCode === 40) {
    moveDown();
  } else if (event.keyCode === 37) {
    moveLeft();
  } else if (event.keyCode === 39) {
    moveRight();
  }
}
move();

function moveUp(){
  var currentPosition = search();
  var newPosition = currentPosition - 4;
  if(newPosition < 0){
    return;
  }
  boxesArray[newPosition] = "*";
  boxesArray[currentPosition] = true;
  drawDom();
}

function moveDown(){
  var currentPosition = search();
  var newPosition = currentPosition + 4;
  if(newPosition >11){
    return;
  }
  boxesArray[newPosition] = "*";
  boxesArray[currentPosition] = true;
  drawDom();
}

function moveLeft(){
  var currentPosition = search();
  var newPosition = currentPosition - 1;
  if(currentPosition % 4 == 0){
    return;
  }
  boxesArray[newPosition] = "*";
  boxesArray[currentPosition] = true;
  drawDom();
}

function moveRight(){
  var currentPosition = search();
  var newPosition = currentPosition + 1;
  if(newPosition % 4 == 0){
    return;
  }
  boxesArray[newPosition] = "*";
  boxesArray[currentPosition] = true;
  drawDom();
}

function search(){
  for(var i = 0;i < boxesArray.length;i++){
    if(boxesArray[i]  === "*"){
      return i;
    }
  }
  return false;
}
search();
