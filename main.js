var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var mouseevent = "empty";



canvas.addEventListener("mousedown" , mymousedown);
function mymousedown(e){

var colour = document.getElementById("colour_input");
var line_width = document.getElementById("LW_input");
var radius = document.getElementById("radius_input");

mouseevent="mousedown";
}

canvas.addEventListener("mouseup" , mymouseup);
function mymouseup(e){

    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave" , mymouseleave);
function mymouseleave(e){

    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove" , mymousemove);
function mymousemove(e){

current_x = e.clientX - canvas.offsetLeft;
current_y = e.clientY - canvas.offsetTop;

if (mouseevent=="mousedown"){
    console.log("cureent Position of x and y cordinates = ");
    console.log("x=" + current_x + "y=" + current_y);

    ctx.beginPath();
    ctx.strokeStyle = colour ;
    ctx.lineWidth = line_width;
    ctx.arc(current_x , current_y , radius , 0 ,  2*Math.PI);
    ctx.stroke();
}

    mouseevent="mousemove";
}