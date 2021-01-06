const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState=0;
var playButton;
var man1;
var rope1;
var gr;
var string;
var flag=0;
var bl1;
var bl2;
var bl3;
var bl4;
var button1,button2,button3;
var polygon1i;
var b1i
var gr1
var score=0;
var bgi;
var bgi1,bgi2;

function preload(){
bgi=loadImage("2+2.png")
bgi1=loadImage("Q2.png")
bgi2=loadImage("qu3.png")

}


function setup(){
createCanvas(1500,displayHeight-133);
  engine = Engine.create();
  world = engine.world;

  man1 =new ropeman(70,height-80)

  gr=new Ground(90,height-10,100,20)
  
 
  bl1=new blocks(540,30,70,40);
  bl2=new blocks(840,30,90,45);
  bl3=new blocks(1140,30,50,70);
  bl4=new blocks(1440,30,90,70);

  bl5=new blocks(3000,30,70,40);
  bl6=new blocks(3400,30,90,45);
  bl7=new blocks(3800,30,50,70);
  bl8=new blocks(4200,30,90,70);

  bl9=new blocks(6000,30,70,40);
  bl10=new blocks(6400,30,90,45);
  bl11=new blocks(6800,30,50,70);
  bl12=new blocks(7200,30,90,70);

  //
  bl13=new blocks(1940,30,70,40);
  bl14=new blocks(2340,30,90,45);
  bl15=new blocks(2740,30,50,70);

  bl17=new blocks(4740,30,70,40);
  bl18=new blocks(5140,30,90,45);
  bl19=new blocks(5540,30,50,70);
  
}

function draw(){
 Engine.update(engine);
 
 if(gameState===0){
 background(51,255,153)
 textSize(35);
 text("PRESS ENTER TO START THE GAME",100,400);
 text("ROPEMATHS",200,50);
 
 }

if(gameState===1){ 
 createCanvas(7500,displayHeight-133);

 background(255,102,102);
 
//buttons
 button1=createButton("2");
 button1.position(bl1.x-30,bl1.y-20)
 button1.size(bl1.width-10,bl1.height-5);

 button2=createButton("4");
 button2.position(bl2.x-40,bl2.y-20)
 button2.size(bl2.width-10,bl2.height-8);

 button3=createButton("5");
 button3.position(bl3.x-25,bl3.y-30)
 button3.size(bl3.width,bl3.height-10);

 button4=createButton("6");
 button4.position(bl4.x-40,bl4.y-30)
 button4.size(bl4.width-10,bl4.height-15);

 button5=createButton("16");
 button5.position(bl5.x-30,bl5.y-20)
 button5.size(bl5.width-10,bl5.height-10);

 button6=createButton("19");
 button6.position(bl6.x-35,bl6.y-20)
 button6.size(bl6.width-10,bl6.height-5);

 button7=createButton("15");
 button7.position(bl7.x-25,bl7.y-30)
 button7.size(bl7.width-10,bl7.height-5);

 button8=createButton("11");
 button8.position(bl8.x-38,bl8.y-30)
 button8.size(bl8.width-10,bl8.height-12);

 button9=createButton("33");
 button9.position(bl9.x-25,bl9.y-20)
 button9.size(bl9.width-10,bl9.height-5);

 button10=createButton("25");
 button10.position(bl10.x-35,bl10.y-22)
 button10.size(bl10.width-10,bl10.height-5);

 button11=createButton("30");
 button11.position(bl11.x-20,bl11.y-30)
 button11.size(bl11.width-5,bl11.height-10);

 button12=createButton("38");
 button12.position(bl12.x-38,bl12.y-30)
 button12.size(bl12.width-10,bl12.height-10);

 //



 man1.display();
 gr.display();
 bl1.display();
 bl2.display();
 bl3.display();
 bl4.display();
 bl5.display();
 bl6.display();
 bl7.display();
 bl8.display();
 bl9.display();
 bl10.display();
 bl11.display();
 bl12.display();
 //
 bl13.display();
 bl14.display();
 bl15.display();
 bl17.display();
 bl18.display();
 bl19.display();
 spawnQ1();

 fill("red")
 textSize(37)
 text(score,man1.x-5,man1.y+28)

 //if(button1.mousePressed){
   //text("CORRECT",300,400)
//}
}
  
 drawSprites();
} 
    
function keyPressed(){
  if(keyCode===13){
    gameState=1;
 }
}

function mousePressed(){
  string=new rope(man1.body,bl1.body);

}

function spawnQ1(){
  if(frameCount%200===0){
    var q1;
    q1=createSprite(1490,200,70,40);
    q1.addImage(bgi)
    q1.velocityX=-3;
    q1.lifetime=300

    var q2;
    q2=createSprite(4100,200,70,40);
    q2.addImage(bgi1)
    q2.velocityX=-3;
    q2.lifetime=300

    var q3;
    q3=createSprite(7150,200,70,40);
    q3.addImage(bgi2)
    q3.velocityX=-3;
    q3.lifetime=300

  }
  
}