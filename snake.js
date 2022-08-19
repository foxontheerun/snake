const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

class Snake {
    constructor(id, score = 0) {
        this.id = id;
        this.size = 32;
        this.x = 640/2 - this.size/2;
        this.y = 640/2 - this.size/2;
        this.score = score;
        // console.log(this.x);
        // this.TEST = setInterval(this.render, 500);
        // console.log(this.x);
    }


    move() {
        if (e.which === 37 || e.which === 39) {
            const col = e.which === 37
              // если влево, то уменьшаем индекс в столбце, если вправо — увеличиваем
              ? this.x - this.size
              : this.x + this.size;
          }
          if (e.which === 38 || e.which === 40) {
            const col = e.which === 38
              // если влево, то уменьшаем индекс в столбце, если вправо — увеличиваем
              ? this.y - this.size
              : this.y + this.size;
          }
        this.render();
    }

    render() {
        context.fillStyle = 'rgb(182, 250, 104)';
        context.fillRect(this.x, this.y, this.size, this.size);
        context.clearRect(this.x - this.size, this.y, this.size, this.size);
        // this.x =  this.x + this.size;
    }

   

}


let user = new Snake('Jopa');
console.log(user.x);
document.addEventListener('keydown', () => user.move());
setInterval(function() {
    user.move();
  }, 500);



//   document.addEventListener('keydown', function(e) {
  
//     // стрелки влево и вправо
//     if (e.which === 37 || e.which === 39) {
//       const col = e.which === 37
//         // если влево, то уменьшаем индекс в столбце, если вправо — увеличиваем
//         ? tetromino.col - 1
//         : tetromino.col + 1;
//     }});


console.log(user.x);
