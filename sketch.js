var hr

var mn

var sc

var scAngle , hrAngle , mnAngle;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hr = hour();

  mn = minute();

  sc = second();

  angleMode(DEGREES);

  scAngle = map(sc,0,60,0,360);

  mnAngle = map(mn,0,60,0,360);

  hrAngle = map(hr,0,12,0,360);
}

function draw() {
  background(255,255,255);

  push();
  rotate(scAngle);
  rotate(hrAngle);
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(width / 2, height / 2);
  pop();

  drawSprites();
}