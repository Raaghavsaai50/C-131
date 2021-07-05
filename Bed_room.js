function preload(){
    img=loadImage("Bed_room.jpg");
    }
    
    function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    }
    function modelLoaded(){
        console.log("model is loaded");
        status=true;
        objectDetector.detect(img,gotresults);
    }
    
    function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
    }
    
    function draw(){
    image(img,0,0,640,420);
    }