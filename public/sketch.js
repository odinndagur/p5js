let myCanvas;
function setup(){
    myCanvas = createCanvas(windowWidth,windowHeight);
    myCanvas.parent("app");
}

function draw(){
background(frameCount);
}