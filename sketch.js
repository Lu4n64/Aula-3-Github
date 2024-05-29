function setup() {
  createCanvas(400, 400);
  background("white");
}

function draw() {
  stroke("black")
  fill("red")
  if(mouseIsPressed) {
    rect(mouseX-15, mouseY-15, 30, 30);
  }
}
