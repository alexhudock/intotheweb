var boxWH = 230;
var boxR = 172;
var boxG = 173;
var boxB = 188;
var boxA = 255;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(71,59,240);

  noStroke();
  fill (boxR,boxG,boxB,boxA/4);
  rect(82,68,boxWH,boxWH);
  
  fill (boxR,boxG,boxB,boxA/3);
  rect (125,109,boxWH,boxWH);
   
  
  fill (boxR,boxG,boxB,boxA/1.1);
  rect (172,142,boxWH,boxWH);
  
  fill (121,112,244);
  rect (62,434,378,22)
  
  //boxA = boxA -1;
  
  boxA = map(mouseX, 0, 500, 0, 255);
}