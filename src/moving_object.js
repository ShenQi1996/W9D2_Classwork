

function MovingObject() {
    // debugger;
    this.pos = arguments[0].pos;
    this.vel = arguments[0].vel;
    this.radius = arguments[0].radius;
    this.color = arguments[0].color; 
} 
MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, 2 * Math.PI, true)
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.fillStyle = "blue";
    ctx.fill();
    console.log("goodbye")
    ctx.stroke();
}

module.exports = MovingObject