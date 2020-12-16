document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.square');
  const result = document.querySelector('#result');
  var a = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  squares.forEach(square => {
    square.addEventListener('click', clickOutcome)
  })

  var i = 0;

  function clickOutcome(e) {
    const squareArray = Array.from(squares);
    const index = squareArray.indexOf(e.target);
    i++;
      while (true) {
        if (a[index] === 0 && i <= 4) {
          a[index] = 1;
          squares[index].classList.add('playerX');
          console.log(a);
          if ((a[0] == 1 && a[1] == 1 && a[2] == 1) || (a[3] == 1 && a[4] == 1 && a[5] == 1) ||
          (a[6] == 1 && a[7] == 1 && a[8] == 1) || (a[0] == 1 && a[3] == 1 && a[6] == 1) ||
          (a[1] == 1 && a[4] == 1 && a[7] == 1) || (a[2] == 1 && a[5] == 1 && a[8] == 1) ||
          (a[0] == 1 && a[4] == 1 && a[8] == 1) || (a[2] == 1 && a[4] == 1 && a[6] == 1)) {
            i = 6;
            console.log('Player wins!');
            result.innerHTML = "Player wins!";
          }
          else {
            computerTurn(a);
            if ((a[0] == 2 && a[1] == 2 && a[2] == 2) || (a[3] == 2 && a[4] == 2 && a[5] == 2) ||
            (a[6] == 2 && a[7] == 2 && a[8] == 2) || (a[0] == 2 && a[3] == 2 && a[6] == 2) ||
            (a[1] == 2 && a[4] == 2 && a[7] == 2) || (a[2] == 2 && a[5] == 2 && a[8] == 2) ||
            (a[0] == 2 && a[4] == 2 && a[8] == 2) || (a[2] == 2 && a[4] == 2 && a[6] == 2)) {
              i = 6;
              console.log('Computer wins!');
              result.innerHTML = "Computer wins!";
            }
            else {
              break;
            }
          }
        }
        else if (a[index] === 0 && i == 5) {
          a[index] = 1;
          squares[index].classList.add('playerX');
          if ((a[0] == 1 && a[1] == 1 && a[2] == 1) || (a[3] == 1 && a[4] == 1 && a[5] == 1) ||
          (a[6] == 1 && a[7] == 1 && a[8] == 1) || (a[0] == 1 && a[3] == 1 && a[6] == 1) ||
          (a[1] == 1 && a[4] == 1 && a[7] == 1) || (a[2] == 1 && a[5] == 1 && a[8] == 1) ||
          (a[0] == 1 && a[4] == 1 && a[8] == 1) || (a[2] == 1 && a[4] == 1 && a[6] == 1)) {
            i = 6;
            console.log('Player wins!');
            result.innerHTML = "Player wins!";
            break;
          }
          else if ((a[0] == 2 && a[1] == 2 && a[2] == 2) || (a[3] == 2 && a[4] == 2 && a[5] == 2) ||
          (a[6] == 2 && a[7] == 2 && a[8] == 2) || (a[0] == 2 && a[3] == 2 && a[6] == 2) ||
          (a[1] == 2 && a[4] == 2 && a[7] == 2) || (a[2] == 2 && a[5] == 2 && a[8] == 2) ||
          (a[0] == 2 && a[4] == 2 && a[8] == 2) || (a[2] == 2 && a[4] == 2 && a[6] == 2)) {
            i = 6;
            console.log('Computer wins!');
            result.innerHTML = "Computer wins!";
            break;
          }
          else {
            console.log(a);
            console.log('Draw!');
            result.innerHTML = "Draw!";
            break;
          }
        }
        else {
          break;
        }
      }
  }

  function computerTurn(a) {
    while (true) {
      var index = Math.floor(Math.random() * (8 - 0) + 0);
      if (a[index] === 0) {
        squares[index].classList.add('computerO');
        a[index] = 2;
        console.log(a);
        break;
      }
      else {
        continue;
      }
    }
  }
})
