const canvas = document.getElementById('game');
const placeForData = document.getElementById('score');
const context = canvas.getContext('2d');
const taskEntryField = document.getElementById('input');

function Snake(id) {
    this.id = id;
    this.cellSize = 32;
    this.x = 288;
    this.y = 288;
    this.score = 0;
    this.cells = [];
    this.dx = this.cellSize;
    this.dy = 0;
    this.cells = [];
    this.maxCells = 4;

    this.move = function() {
      this.clear();
      this.cells.unshift({ x: this.x, y: this.y });
      if (this.cells.length > this.maxCells) {
        this.cells.pop();
      }
      this.cells.forEach(cell => {
        context.fillStyle = 'rgb(182, 250, 104)';
        context.fillRect(cell.x , cell.y , this.cellSize - 1, this.cellSize - 1);
      });
      if (this.cells[0].x > 608 && this.cells[1].x <= 608) {
        this.x -= 672;
      }
      else if (this.cells[0].x < 0 && this.cells[1].x >= 0) {
        this.x += 640;
      }
      else if (this.cells[0].y > 608 && this.cells[1].y <= 608) {
        this.y -= 672;
      }
      else if (this.cells[0].y < 0 && this.cells[1].y >= 0) {
        this.y += 640;
      }
      this.x += this.dx;
      this.y += this.dy;
    }
    
   
    this.clear = function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    this.changeDirection = function(e) {
      // Стрелка влево
      if (e.which === 37 && this.dx === 0) {
        this.dx += -this.cellSize;
        this.dy = 0;
      }
      // Стрелка вверх
      else if (e.which === 38 && this.dy === 0) {
        // this.clear();
        this.dy += -this.cellSize;
        this.dx = 0;
      }
      // Стрелка вправо
      else if (e.which === 39 && this.dx === 0) {
        this.dx += this.cellSize;
        this.dy = 0;
      }
      // Стрелка вниз
      else if (e.which === 40 && this.dy === 0) {
        this.dy += this.cellSize;
        this.dx = 0;
      }
    }
  }

const apple = {
  x: 160,
  y: 160,
  dx: 0,
  dy: 0,
  color: 'rgb(219, 0, 0)',
  
  render() {
    context.fillStyle = this.color;
    context.fillRect(this.x , this.y , this.cellSize - 1, this.cellSize - 1);
  },
};

function start() {
  const gamer = new Snake(taskEntryField.value);
  console.log(gamer.id);
  document.getElementById("form").remove();
  logScore();
  apple.__proto__ = gamer;
  document.addEventListener('keydown', function (e) {
    gamer.changeDirection(e);
  });
  
  
  
  
  function go() {
    gamer.move();
    apple.render();
    if (gamer.x == apple.x && gamer.y == apple.y) {
      apple.x =  getRandomInt(0, 19) * 32;
      apple.y =  getRandomInt(0, 19) * 32;
      gamer.score++;
      gamer.maxCells++;
      console.log(gamer.score);
      logScore();
    }
  }
  
  function logScore() {
    placeForData.innerHTML = `<p 
    style = "color: rgb(75, 91, 94); 
            font-size: 48px;
            font: serif;
            padding:10px;"
            >Игрок: ${gamer.id}
            </p>
            <p  style = "color: rgb(75, 91, 94); 
            font-size: 48px;
            font: serif;
            padding:10px;">Очки: ${gamer.score} </p>`
  }
  
  let timerSnake = setInterval(go, 70);
  
  let count = 0;
  document.addEventListener('keydown', function (e) {
    if (e.which === 32 ) {
      if (count == 0) {
      clearInterval(timerSnake);
      count++;
    }
    else {
      timerSnake = setInterval(go, 70);
      count--;
      }
    } 
  });
  
}



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



console.log(Number.isFinite("0"))


