function setup() {
  createCanvas(900, 400);
}

function draw() {
  if(mouseIsPressed) {
    fill(230,230,250);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);    
}