img = "";

function preload() {
    img = loadImage("bed.png");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    document.getElementById("status").innerHTML = "Status : Detected Object";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("red");
    noFill();
    stroke("red");
    rect(120, 70, 450, 320);
    text("Bed", 130, 85);
    fill("red");
    noFill();
    stroke("red");
    rect(10, 90, 150, 200);
    text("Tea Table", 20, 100);
    fill("red");
    noFill();
    stroke("red");
    rect(470, 180, 150, 200);
    text("Table", 480, 190);
}