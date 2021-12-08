function setup() {
  var = myCanvas = createCanvas(displayWidth, displayHeight);
  myCanvas.parent("p5");

	// Getting microphone input
	mic = new p5.AudioIn();
  mic.start();

	// Setting up the amplitude module
	amplitude = new p5.Amplitude(0.5);
	amplitude.setInput(mic);
	// Get a better range
	amplitude.toggleNormalize(1);
}

function draw() {
  background(0);
	fill(255);
	Measure the volume
	volume = 10 + amplitude.getLevel()*300;
	// print(volume)
	ellipse(displayWidth/2, displayHeight/2, volume, volume);
  ellipse(mouseX, mouseY, 400, 400)
}
