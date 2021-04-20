console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => {

    const canvasEle = document.getElementById("game-canvas");

    const ctx = canvasEle.getContext("2d");

});
