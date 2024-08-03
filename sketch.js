function setup() {
    createCanvas(600, 600);
    background('BLACK');
  }
  
  function draw() {
    
    fill("red");
    stroke('black')
    
    //console.log(mouseIsPressed);
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
            }
    
    
  }