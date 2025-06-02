let carColorPicker;
let carColor;
let angle = 0;
let isRotating = true;

function setup() {
  const canvas = createCanvas(800, 600, WEBGL);
  canvas.parent("canvas-container");

  carColorPicker = select("#nebula-color");
  carColor = color(255, 0, 0);

  setupButton();
}

function draw() {
  background(30);
  lights();

  carColor = color(carColorPicker.value());

  if (isRotating) {
    angle += 0.01;
  }

  rotateY(angle);

  drawCar();
}

function drawCar() {
  push();
  fill(carColor);

  box(100, 30, 50);

  push();
  translate(0, -20, 0);
  fill(200);
  box(60, 20, 45);
  pop();

  fill(20);
  drawWheel(-40, 20, -25);
  drawWheel(40, 20, -25);
  drawWheel(-40, 20, 25);
  drawWheel(40, 20, 25);

  pop();
}

function drawWheel(x, y, z) {
  push();
  translate(x, y, z);
  rotateX(HALF_PI);
  cylinder(10, 10);
  pop();
}

function setupButton() {
  // Botão para pausar/retomar a rotação
  const toggleRotationBtn = select("#toggle-rotation");
  toggleRotationBtn.mousePressed(() => {
    isRotating = !isRotating;
    toggleRotationBtn.html(isRotating ? "Pausar Rotação" : "Retomar Rotação");
  });
}
