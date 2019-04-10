let objArray = [];
let objNum =35;

function setup() {
  createCanvas(windowWidth, 500);
  colorMode(HSB);
  for (let i = 0; i<objNum; i++){
    objArray[i] = new impRect ();
    
  }
  
}

function draw() {
  background(326,0,29);
  
//grid
  stroke(0,0,0);
  strokeWeight(2);
    
  for (let i = 101; i<height; i= i+97){
    line (0,i,width,i);
  }
  
  for (let i = 80; i<width; i = i + 86){
    line (i,0,i,height);
    
  }

  
  for (let i = 0; i<objNum; i++){
    objArray[i].display();
  }
 
}

class impRect {
  constructor() {
    this.x = random(-100,width);
    this.y = random(-100,height);
    this.fillH = random(360)
    this.fillS = 50
    this.fillB = 100
    this.rotation = 0
    
    
    
    
    
  }
/*
  move() {
 
  }
*/
  display() {
    
    let x = this.x;
    let y = this.y;
    
    let fillH = this.fillH
    let fillS = this.fillS
    let fillB = this.fillB
    
    
 
      
    fill(fillH,fillS,fillB);
    stroke(161,14,236);
    strokeWeight(1);
    
    //4 shapes
    beginShape();
      vertex(x+98,y+45);
      vertex(x+113,y+54);
      vertex(x+94,y);
      vertex(x+84,y+2);
    endShape(CLOSE);
    
    beginShape();
      vertex(x,y);
      vertex(x+87,y-27);
      vertex(x+104,y-17);
      vertex(x+16,y+10);
      vertex(x+35,y+64);
      vertex(x+98,y+45);
      vertex(x+112,y+54);
      vertex(x+27,y+80); 
    endShape(CLOSE);
   
    beginShape();
      vertex(x+17,y+10);
      vertex(x+32,y+18);
      vertex(x+94,y);
      vertex(x+113,y+54);
      vertex(x+27,y+80);
      vertex(x+42,y+88);
      vertex(x+131,y+61); 
      vertex(x+104,y-18);
    endShape(CLOSE);
  
    beginShape();
      vertex(x+35,y+64);
      vertex(x+46,y+61);
      vertex(x+32,y+18);
      vertex(x+16,y+10);
    endShape(CLOSE);

    

    

  }
}


function mouseClicked(){
  for (let i = 0; i<objNum; i++){
    objArray[i].x = random(width)
    objArray[i].y = random(height);
  }


}