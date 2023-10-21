var b = document.getElementById("changer");
var red,green,blue;
function color(){
    red = Math.floor(Math.random()*256);
    green = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
    b.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("demo").innerHTML = "rgb("+red+","+green+","+blue+")";
    document.getElementById("demo").style.color = "black"
}