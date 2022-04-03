var cols, rows;
var scl = 29;
var w = 3000;
var h = 2500;
var flying = 0;
var terrain = [];
let Bslider;
let Xslider;

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  colorMode(RGB);
  
  Bslider = createSlider(0, 255, 60, 10);
  Bslider.position(10, 10);
  Bslider.style('width', '80px');
  Xslider = createSlider(-500, 500, 60, 3);
  Xslider.position(10, 20);
  Xslider.style('width', '80px');
  Yslider = createSlider(-400, 200, 100, 2);
  Yslider.position(10, 30);
  Yslider.style('width', '80px');
 
   
  {
    
  
  cols = w / scl;
  rows = h / scl;
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    
 var cols, rows;
var scl = 29;
var w = 3000;
var h = 2500;
var flying = 0;
var terrain = [];
let Bslider;
let Xslider;

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  colorMode(RGB);
  
  Bslider = createSlider(0, 255, 60, 10);
  Bslider.position(10, 10);
  Bslider.style('width', '80px');
  Xslider = createSlider(-500, 500, 60, 3);
  Xslider.position(10, 20);
  Xslider.style('width', '80px');
  Yslider = createSlider(-400, 200, 100, 2);
  Yslider.position(10, 30);
  Yslider.style('width', '80px');
 
   
  {
    
  
  cols = w / scl;
  rows = h / scl;
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    
  }
  }
}
}
function draw() {
  flying -= 0.04;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -80, 70);
      xoff += 0.15;
    }
    yoff += 0.15;
  }
  noStroke();
  let val = Bslider.value();
  background(0+val, 0+val, 50, 30);
  
  translate(0, 50);
  rotateX(PI / 3);
  fill(200, 200, 200, 150);
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows -20; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      let v=terrain[x][y];
      v=map(v, -200, 70, 0, 270);
      fill(50, 140-v, v-70,240);
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
     
    }
    endShape();
  }
 X = Xslider.value();
  Y = Yslider.value();
  
  
  //ambientMaterial(100);
 // normalMaterial();
  translate(mouseX-width/2, (mouseY-height/2)*6);
  //directionalLight(250,250, 0,0, 1);
  
  translate(w/2, h/2);
  rotate(PI/4);
  
  push();
 fill(255,40,80);
   ambientLight(250);
  emissiveMaterial(250, 230, 60,200);
 // rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.005);
  rotateZ(frameCount * 0.015);
  rotateY(frameCount * 0.005);
  torus(100,40,104,104)
   
  pop();
  camera(X,Y,800,50,100,100);
}
