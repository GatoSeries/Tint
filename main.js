function preload() {
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(110, 270)
    vid = createCapture(VIDEO);
    vid.hide();
    colores = "";

}

function draw() {
    image(vid, 10, 10, 400, 400);
    tint(colores);
}
function takeSnapshot() {
save("foto.jpg")
}
function tintee(){
    colores = document.getElementById("color_name").value;
}