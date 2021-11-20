var colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("green");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("magenta");
colorCircles[6] = document.getElementById("black");
colorCircles[7] = document.getElementById("orange");
colorCircles[8] = document.getElementById("green");
colorCircles[9] = document.getElementById("pink");
colorCircles[10] = document.getElementById("lightblue");
colorCircles[11] = document.getElementById("crimson");


var targetColor = "red";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";


var list=document.getElementById("list");
list.addEventListener("click", pickColor);


function pickColor(e){
    console.log(e.target.tagName);
    if (e.target.tagName=="LI"){

        if (e.target.id=="red") {
            targetColor="red";
        }
        else if (e.target.id=="blue") {
            targetColor="blue";
        }
        else if (e.target.id=="lightgreen") {
            targetColor="lightgreen";
        }
        else if (e.target.id=="yellow") {
            targetColor="yellow";
        }
        else if (e.target.id=="cyan") {
            targetColor="cyan";
        }
        else if (e.target.id=="black") {
            targetColor="black";
        }
        else if (e.target.id=="orange") {
            targetColor="orange";
        }
        else if (e.target.id=="green") {
            targetColor="green";
        }
        else if (e.target.id=="pink") {
            targetColor="pink";
        }
        else if (e.target.id=="lightblue") {
            targetColor="lightblue";
        }
        else if (e.target.id=="crimson") {
            targetColor="crimson";
        }
        else if (e.target.id=="magenta") {
            targetColor="magenta";
        }

        for (var i = 0; i<=11; i++) {
            colorCircles[i].style.height="50px";
            colorCircles[i].style.width="50px";
        }
        e.target.style.height = "80px";
        e.target.style.width = "80px";
    }
}


var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);


function drawOnCanvas(e) {
    if (e.which==1){
    canvasContext.strokeStyle=targetColor;
    canvasContext.fillStyle=targetColor;
    canvasContext.beginPath();
    canvasContext.arc(e.offsetX, e.offsetY, 20, 0, Math.PI *2);
    canvasContext.stroke();
    canvasContext.fill();
    }
}