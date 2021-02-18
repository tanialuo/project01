
let title = "Turn off the light!! I want to SLEEP!!"
var possibleX = [900,620,1290,1900,2480,2600,3000];
var possibleY = [1420,2000,1050,1650,700,2250,1270];
let num = possibleX.length;
let isClicked;
let r = 400;
var texts = ['it is not the time to sleep',
            'you still have assignment due tommorow',
            'you need to take a shower today',
            'did you wash your clothes?',
            'do not forget to lock the door!',
            'you always have dinner so late',
            'wanna have some snacks?']



function preload(){

  floorPlan = loadImage("images/floorPlan.png");
  light = loadImage("images/light.png");

}



function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);


  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);
  textStyle(NORMAL);
  stroke(255);
  fill(255);
  textSize(100);

}



function draw() {

background(0);
// image setup
image(floorPlan,2000,1500,3300,2550);

fill(200,150,100);
textSize(100);
text(title,1280,500);


  fill(100);
  textSize(60);
  text('bed lamp',possibleX[0],possibleY[0]);
  text('table lamp',possibleX[1],possibleY[1]);
  text('bathroom',possibleX[2],possibleY[2]);
  text('hallway',possibleX[3],possibleY[3]);
  text('doorway',possibleX[4],possibleY[4]);
  text('living room',possibleX[5],possibleY[5]);
  text('kitchen',possibleX[6],possibleY[6]);


 for(i = 0; i <= possibleX.length; i++){
    if(mouseIsPressed && dist(mouseX,mouseY,possibleX[i],possibleY[i])<r/2){
     ellipse(possibleX[i],possibleY[i],1,1);
     fill(255);
     text(texts[i], possibleX[i],possibleY[i]+100);
     }
     else{
         textSize(80);
         textStyle(BOLD);
         fill(250,250,200);
         ellipse(possibleX[i],possibleY[i],r,r);
         }
  }

}
