// function setup() {
//   var = myCanvas = createCanvas(displayWidth, displayHeight);
//   myCanvas.parent("p5");
//
// 	// // Getting microphone input
// 	// mic = new p5.AudioIn();
//   // mic.start();
//   //
// 	// // Setting up the amplitude module
// 	// amplitude = new p5.Amplitude(0.5);
// 	// amplitude.setInput(mic);
// 	// // Get a better range
// 	// amplitude.toggleNormalize(1);
// }
//
// function draw() {
//   background(0);
// 	fill(255);
// 	// Measure the volume
// 	// volume = 10 + amplitude.getLevel()*300;
// 	// // print(volume)
// 	// ellipse(displayWidth/2, displayHeight/2, volume, volume);
//   ellipse(mouseX, mouseY, 400, 400)
// }

function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    let x = mouseX;
    let y = mouseY;
    let ix = width - mouseX;  // Inverse X
    let iy = height - mouseY; // Inverse Y

    let jx = width - mouseX - width/2;  // Inverse X
    let jy = height - mouseY; // Inverse Y

    let zx = width - mouseX - width/4;  // Inverse X
    let zy = height - mouseY; // Inverse Y


    background(126);

    fill(255, 150);
    ellipse(x, height/2, y, y);

    fill(0, 200);
    ellipse(ix, height/2, iy, iy);

    fill(0, 150);
    ellipse(zx, height/2, zy, zy);

    fill(0, 100)
    ellipse(jx, height/2, jy, jy)
}
