let startScene = true;
let blackScene = false;

let btnSize = 120;
let w, h;

function preload(){
  startBG = loadImage('image/p01-test.png')
  blackBG = loadImage('image/p02.png')
  loadImage('image/startbtn.png')
}

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  w = window.innerWidth;
  h = window.innerHeight;
  console.log(w+','+h)
  
  startBG.resize(w, 3518*(w/1626))
  blackBG.resize(w, 1420*(w/658))
  startBtn = createImg('image/startbtn.png', 'startBtn');
  startBtn.size(btnSize, 814*(btnSize/ 1477));
  startBtn.position(width/2 - 55, height/2-70);
  startBtn.mouseClicked(function(){
    startScene = false;
    blackScene = true;
  })
  startBtn.show();
}

function draw() {
  // background(220);
  if(startScene){
    push();
    translate(width/2, height/2);
    imageMode(CENTER);
    image( startBG, 0 , 0 )
    pop();
  }else if(blackScene){
    push();
    translate(width/2, height/2);
    imageMode(CENTER);
    image( blackBG, 0 , 0 )
    pop();
    startBtn.hide();
  }
}