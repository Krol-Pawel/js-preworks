let argButtonName, 
  buttonTest,
  ButtonRock = document.getElementById('button-rock'),
  ButtonPaper = document.getElementById('button-paper'),
  ButtonScissors = document.getElementById('button-scissors');


/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

// buttonTest = document.getElementById('button-test');
// buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });


let argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
// playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
// console.log('wybór ruchu gracza to: ' + playerInput);
// playerMove = getMoveName(playerInput);
// console.log('ruch gracza to: ' + playerMove);
playerMove = argButtonName;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
// function result()
}

ButtonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
ButtonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
ButtonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); })

function result() {

  var computersite = document.getElementById('computersite').Value
  console.log (computersite)
  var yoursite = document.getElementById('yoursite').Value
  console.log (yoursite)
  function score(){ 
    if (printMessage="wygrywasz") {a==1;}
    else if (printMessage="przegrywasz") {a==2;}
    else {c=0}
  }
  function calculate(){
    
  }
}