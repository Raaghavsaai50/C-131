function preload(){
    img=loadImage("TV.jpg");
    }
    
    function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    }
    
    function draw(){
    image(img,0,0,640,420);
    }