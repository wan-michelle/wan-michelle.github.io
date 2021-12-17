var x = [];
var y = [];
var w = 33.5;
var color = [];

function setup() {

    const saveButton = createButton('Save Avatar');
    saveButton.mousePressed(() => save(canvas, 'Avatar.jpg'));

    var canvas = createCanvas(700, 700);
    for (var i = 0; i < 20; i++) {
        x[i] = w + i * w;
        y[i] = w + i * w;
    }

    //color in each cell = true
    for (var i = 0; i < 400; i++) {
        color[i] = true;
    }

}


function draw() {
    clear();
    rectMode(CENTER);
    stroke(200);
    for (var j = 0; j < y.length; j++) {
        for (var i = 0; i < 20; i++) {
            if (color[j * 20 + i]) {
                fill(255);
            } else {
                fill(0);
            }

            rect(x[i], y[j], w, w);
        }
    }
}

function mousePressed() {
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            var dis = dist(mouseX, mouseY, x[i], y[j]);
            if (dis < w/2) {
                color[j * 20 + i] =! color[j * 20 + i];
            }
        }
    }


}