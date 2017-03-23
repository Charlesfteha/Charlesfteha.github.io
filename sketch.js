function setup() {
  createCanvas(1410, 800);
}

function draw() {
  if (mouseIsPressed) {
    fill(255,0,0);
  } else {
    fill(0,0,255);
  }
  ellipse(mouseX, mouseY, 80, 80);
  }
  
  