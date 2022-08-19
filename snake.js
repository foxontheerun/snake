const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
var count = 0;

function Snake(id) {
    this.id = id;
    this.cellSize = 32;
    this.x = 304;
    this.y = 304;
    this.score = 0;
    this.dx = this.cellSize;
    this.dy = 0;

    this.move = function() {
      this.render();
      this.x += this.dx;
      this.y += this.dy;
    }

    this.render = function() {
      context.fillRect(this.x, this.y, this.cellSize - 1, this.cellSize - 1);
    }

    }

const apple = {
  x: 220,
  y: 220
};




let snake = new Snake('Jopa');
document.addEventListener('keydown', function (e) {
  if (e.which === 37 && snake.dx === 0) {
    snake.dx += -snake.cellSize;
    snake.dy = 0;
  }
  // Стрелка вверх
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy += -snake.cellSize;
    snake.dx = 0;
  }
  // Стрелка вправо
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx += snake.cellSize;
    snake.dy = 0;
  }
  // Стрелка вниз
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy += snake.cellSize;
    snake.dx = 0;
  }
});

let time = setInterval(function() {snake.move();}, 500);
// snake.move();
console.log(snake.x);






