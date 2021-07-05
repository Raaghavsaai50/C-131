function preload(){
    img=loadImage("Fruit Basket.jpg");
    }
    
    function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    }
    
    function draw(){
    image(img,0,0,640,420);
    }