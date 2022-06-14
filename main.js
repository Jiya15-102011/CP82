mouseEvent="empty";
var lastmousex,lastmousey;
 canvas=document.getElementById("myCanvas");
j=canvas.getContext("2d");
color="black";
a=2;
canvas.addEventListener("mousedown",s);
function s(b){
color=document.getElementById("color").value;
a=document.getElementById("a").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",t);
function t(b){
currentmousex=b.clientX-canvas.offsetLeft;
currentmousey=b.clientY-canvas.offsetTop;
if(mouseEvent == "mouseDown"){
 j.beginPath();
 j.strokeStyle=color;
 j.lineWidth=a;
 console.log("last mouse position of x is" +lastmousex);
 console.log("last mouse position of y is" +lastmousey);
 j.moveTo(lastmousex,lastmousey);
 console.log("current mouse position of x is" +currentmousex);  
 console.log("current mouse position of y is" +currentmousey);
 j.lineTo(currentmousex,currentmousey);
 j.stroke();
}
lastmousex=currentmousex;
lastmousey=currentmousey;
}
canvas.addEventListener("mouseup",p);
function p(b){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",y);
function y(b){
    mouseEvent="mouseleave";
}