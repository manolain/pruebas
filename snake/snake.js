canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

px = 0;
py = 0;
vx = 1;
vy = 0;
ss = 15;

//tail = 5;
//trail=[];

function init() {
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/10);
}

function game() {

    px += ss * vx;
    py += ss * vy;

    if (px > canvas.width) {
        px = 0  ;
    }

    if (px < 0) {
        px = canvas.width;
    }

    if (py > canvas.height) {
        py = 0;
    }

    if (py < 0) {
        py = canvas.height;
    }

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgb(0, 200, 0)';

    ctx.fillRect(px, py, ss, ss);
}

function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            if (vx == 0) {
                vx = -1;
                vy = 0;
            }
            break;
        case 38:
            if (vy == 0) {
                vx = 0;
                vy = -1;
            }
            break;
        case 39:
            if (vx == 0) {
                vx = 1;
                vy = 0;
            }
            break;
        case 40:
            if (vy == 0) {
                vx = 0;
                vy = 1;
            }
            break;
        default:
    }
}

init();
