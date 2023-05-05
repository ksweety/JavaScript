let myCanvas = document.getElementById("myCanvas") 

paper.setup(myCanvas) 

function drawCircle (e) { 
    console.log(e.x, e.y)  
    If (isMouseDowm)  
    let circle = new paper.Path.Circle({
        radius: Math.random() * 30, 
        center: {
            x: e.x, 
            y: e.y
        } 

    })  

    let red = Math.random() * 255 
    let blue = Math.random() * 255 
    let green = Math.random() * 255
 
 
 
circle.fillColor= "rgb("+red + "," + green + "," + blue +")"
    
} 


let isMouseDown = false

function mouseDownn() {
    isMouseDown = true
}  

function mouseUp() {
    isMouseDown= false
}
myCanvas.addEventListener("mousedown", drawCircle) 
myCanvas.addEventListener("mouseup", mouseUp)