//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let backgroundImage;
let pixelFont;
let playerSprite;
let playerImage;
let textBox;
let textDiv;

function preload() {
  // Load the image during preload to ensure it's ready to use
  backgroundImage = loadImage('assets/images/background-1.png');
  // Load the font I want to use
  pixelFont = loadFont('assets/fonts/PressStart2P-Regular.ttf');
  playerImage = loadImage('assets/images/Sprites/Glad-Sprite.png');
  textBox = loadImage('assets/images/text-box.png');
}
  
/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  
  textAlign(CENTER);
  textSize(20);
  noStroke();
  fill(255, 255, 255);
  textFont(pixelFont); // Set the font for the sketch

  // Set up the home screen
  background("black");
  text(
    "starting up.",
    width / 2,
    height / 2 - 100
  );

  // Create buttons for all screens and set position off screen
  enterButton = new Sprite(width / 2, height / 2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
}

/* DRAW LOOP REPEATS */
function draw() {
  //Draw enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.text = "Enter";
  enterButton.color = "white";

  // Check enter button
  if (enterButton.mouse.presses()) {
    showScreen1();
    screen = 1;
  }

  if (screen == 1) {
    if (a1Button.mouse.presses()) {
      showScreen2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      showScreen5();
      screen = 5;
    }
  }

  print(screen);
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  background(backgroundImage);

  //Sprite
  playerImage.resize(400, 400);
  playerSprite = new Sprite(playerImage, 300, 200, 10, 10); 

  //Text Box
  textBox.resize(700, 350);
  textBoxSprite = new Sprite(textBox, 300, 230, 100, 10);

  // Move extra buttons off screen
  enterButton.pos = { x: -100, y: -100 };
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };

  // Add a1 button
  a1Button.pos = { x: width / 2 + 150, y: height / 2 - 50 };
  a1Button.w = 50;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "white";
  a1Button.text = "Hi!";

  // Add a2 button
  a2Button.pos = { x: width / 2 + 150, y: height / 2 + 10 };
  a2Button.w = 50;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "white";
  a2Button.text = "...";

  textDiv = select('#text-element');
  textDiv.html("Oh, hi. I wasn’t expecting<br> you to hop on so early<br> - Anyways, nice to meet<br> you. I’m Yuri.");
  textDiv.addClass('custom-text-style');
}

function showScreen2() {
  print("Display screen 2");
  background(backgroundImage);
  textDiv.html("So, what's your name?");
  playerSprite.pos = { x: -300, y: -300 };
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  // Add b1 Button
  b1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  b1Button.w = 50;
  b1Button.h = 50;
  b1Button.collider = "k";
  b1Button.color = "plum";
  b1Button.text = "B1";
  // Add b2 Button
  b2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
  b2Button.w = 50;
  b2Button.h = 50;
  b2Button.collider = "k";
  b2Button.color = "plum";
  b2Button.text = "B2";
}

function showScreen3() {
  background("lavender");
  text("text", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
}

function showScreen4() {
  background("plum");
  text("You hit an end point at Screen 4.", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
}

function showScreen5() {
  print("Display screen 5");
  background("black");
  text("You disconnected.", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  playerSprite.pos = { x:-300, y: -300 };
}

