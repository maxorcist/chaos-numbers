var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var points = [];
var pos = [300, 300];
var travel = 0.5;
console.log(travel)

ctx.fillStyle = "#FF0000";
var draw = (x, y) => {
  ctx.fillRect(x, y, 2, 2);
}

var to = 0;
var halfway = (p1, p2) => {
  return [Math.floor(p1[0] + p2[0]) / 2, Math.floor(p1[1] + p2[1]) / 2]
}
var move = (p1, p2) => {
  moveX = p1[0] + Math.floor(difference(p1[0], p2[0]) * travel);
  moveY = p1[1] + Math.floor(difference(p1[1], p2[1]) * travel);
  return [moveX, moveY]
}
var difference = (val1, val2) => {
  return (val1 - val2) * -1;
}

document.getElementById("run").onclick = () => {
  travel = document.getElementById("range").value / 100;
  var times = document.getElementById("times").value || 1000;
  for(let x = 0; x < times; x++) {
    to = Math.floor(Math.random() * points.length);
    pos = move(pos, points[to]);
    ctx.fillRect(pos[0], pos[1], 2, 2);
}
}

canvas.onclick = (evt) => {
  let mouse = getMousePos(canvas, evt);
  let mx = mouse.x;
  let my = mouse.y;
  points = [
    ...points,
    [mx, my]
  ];
  draw(mx, my);
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}


