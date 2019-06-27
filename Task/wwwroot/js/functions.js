function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function rotate(x, y, angle) {

    angle = degrees_to_radians(angle);
    var cosAngle = Math.cos(angle);
    var sinAngle = Math.sin(angle);
    return {
        x: x * cosAngle - y * sinAngle,
        y: x * sinAngle + y * cosAngle
    };
}

function calculateRow(index, scope, rotLine) {
    var startx = index * rotLine.x;
    var starty = index * rotLine.y;
    var endx = index * rotLine.x + scope.columns * scope.modSize;
    var endy = index * rotLine.y;

    drawLine(startx, starty, endx, endy);
}

function calculateColumn(index, scope, rotLine) {
    var startx = index * scope.modSize;
    var starty = 0;
    var endx = scope.rows * rotLine.x + index * scope.modSize;
    var endy = scope.rows * rotLine.y;

    drawLine(startx, starty, endx, endy);
}

function drawLine(sx, sy, ex, ey) {

    var translate = { x: 50, y: 50 };

    ctx.beginPath();
    ctx.moveTo(sx + translate.x, sy + translate.y);
    ctx.lineTo(ex + translate.x, ey + translate.y);
    ctx.stroke();
}

function draw(scope) {
    var rotatedLine = rotate(0, scope.modSize, -scope.tiltAngle);
    ctx.clearRect(0, 0, c.width, c.height);
    for (i = 0; i < scope.rows + 1; i++) {
        calculateRow(i, scope, rotatedLine);
    }
    for (i = 0; i < scope.columns + 1; i++) {
        calculateColumn(i, scope, rotatedLine);
    }
}