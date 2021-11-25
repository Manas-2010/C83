var mouseEvent = "empty";

var last_position_of_x , last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";

width_of_line = 1;

canvas.addEventListener("mouseDown" , my_mouseDown);
function my_mouseDown(e){
    mouseEvent= "mouseDown";
}

canvas.addEventListener("mouseLeave" , my_mouseLeave);
function my_mouseLeave(e){
    mouseEvent= "mouseLeave";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseup";
}

canvas.addEventListener("mouseMove" , my_mouseMove);
function my_mouseMove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last position of X and Y cordinates = ");
        console.log("X = " + last_position_of_x + "Y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);
        console.log("Current positon of X and Y = ");
        console.log("X = " + current_position_of_mouse_x + "Y =" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}