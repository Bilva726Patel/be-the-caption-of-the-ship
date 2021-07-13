    var ship, ship_floating, edges;

    var ground;
    var bg,bgImage;

    function preload(){
      ship_floating = loadAnimation("ship-1.png","ship-2.png","ship-3.png" ,"ship-4.png");
      
      bgImage = loadImage("sea.png",);  
    }

    function setup(){
      createCanvas(600,200);  

      bg = createSprite(600,50,600,400);
      bg.addImage(bgImage);
      bg.scale = 0.5;

      ground=createSprite(300,180,600,20);
      ground.visible=false;
       

      ship = createSprite(50,160,20,50);
      ship.addAnimation("floating", ship_floating);
      edges = createEdgeSprites();
      ship.x = 70;
      ship.scale=0.2;
    }

    function draw() {
      background("pink");
      
      bg.velocityX=-10;

      if(bg.x<0){
        bg.x= 400;
      }
     
      
      if(keyDown("space")){
        ship.velocityY = -10;
      }
      
      ship.velocityY = ship.velocityY + 1;
      
      
    ship.collide(ground);
      drawSprites();
    }

