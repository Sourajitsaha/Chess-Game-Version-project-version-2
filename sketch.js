var flag = true;

var P1, OP1, P2, OP2, P3, OP3, P4, OP4, P5, OP5, P16, OP6, P7, OP7, P8, OP8,  pawnInfo;

function setup() {
  createCanvas(850,850);
  rectMode(CENTER);

  fill("brown");
  rect(425, 12.5, 850, 25);
  rect(837.5,425,25,850);
  rect(12.5,425,25,850);
  rect(425,837.5,850,25);
   
  for (let x = 75; x < 800; x = x+100) {
    // for 8 rows
    for(var y = 75; y < 800; y=y+100){

      //creating the 8 columns      
      if(flag){
        fill("grey");
  
        flag = false;

      } else {
        fill("white");

        flag = true;

      }
      rect(x, y, 100, 100);
    }

    if(flag){
      flag = false;
    } else {
      flag = true;
    }
    
  }
  //createSprite(400, 200, 50, 50);

  P1 = new GPawn("white", 0);
  OP1 = new GPawn("black", 0);

  P2 = new GPawn("white", 1);
  OP2 = new GPawn("black", 1);

  P3 = new GPawn("white", 2);
  OP3 = new GPawn("black", 2);

  P4 = new GPawn("white", 3);
  OP4 = new GPawn("black", 3);

  P5 = new GPawn("white", 4);
  OP5 = new GPawn("black", 4);

  P6 = new GPawn("white", 5);
  OP6 = new GPawn("black", 5);

  P7 = new GPawn("white", 6);
  OP7 = new GPawn("black", 6);

  P8 = new GPawn("white", 7);
  OP8 = new GPawn("black", 7);

}

function draw() {

  P1.display();
  OP1.display();
  P2.display();
  OP2.display();
  P3.display();
  OP3.display();
  P4.display();
  OP4.display();
  P5.display();
  OP5.display();
  P6.display();
  OP6.display();
  P7.display();
  OP7.display();
  P8.display();
  OP8.display();

  drawSprites();
}

function mouseClicked(){
  pawnInfo = identifyPawn(mouseX, mouseY);
  console.log(pawnInfo[0]);
  console.log(pawnInfo[1]);
}

function mouseDragged(){

  console.log("inside mouse dragged function");
  switch(pawnInfo!== undefined && pawnInfo[0]){
    case 0: if(color == "white"){
              P1.x = mouseX;
              P1.y = mouseY;
            } else {
              OP1.x = mouseX;
              OP1.y = mouseY;
            }
            break;
    case 1: break;

    case 3: break;

    case 4: break;

    case 5: break;

    case 6: break;

    case 7: break;

    default: break;

  }
  
}


function identifyPawn(xPos, yPos){
  var info=[];
  var index, color = "grey";

  if(yPos >=125 && yPos <225){
    color = "white";
  }
  if(yPos >=625 && yPos <725){
    color = "black";
  }

  if(xPos >=25 && xPos < 125)
    index = 0;
  else if(xPos >=125 && xPos < 225)
   index = 1;
   else if (xPos >= 225 && xPos < 325)
    index = 2;
   else if (xPos >=325 && xPos < 425)
  index = 3;
  else if(xPos >=425 && xPos < 525)
  index = 4;
  else if(xPos >=525 && xPos < 625)
    index = 5;
  else if(xPos >=625 && xPos < 725)
    index = 6;
  else if(xPos >= 725 && xPos < 825)
    index = 7;
  else
    index = 10;

  info = [index , color];
  return info;
}