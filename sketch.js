var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg=loadImage("path.png"); //prof: carregar a imagem na variável
 
  //loadAnimation (carregarAnimação) de corrida para o menino
  //prof: carregar as animações na variável
  //prof: colocar o nome das imagens exatamente como está na pasta
  boyImg=loadAnimation("Jake1.png","Jake2.png","jake4.png","jake5.png");

}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista
path = createSprite(200,200,20,20);
path.addImage(pathImg); //prof: chamar o sprite.addImage e colocar a variável do preload
//adicione uma imagem para a pista

//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.velocityY = 4; //prof: colocar sprite.velocityY
path.scale=1.2;

//crie um sprite de menino
boy = createSprite(200,200,20,20);
//adicione uma animação de corrida para ele
//boy.velocityY = boy.velocityY + 0.8 prof: usar o conceito de objeto parado e chão mexendo
boy.scale=0.8;
boy.addAnimation("running",boyImg); //prof: carregar animação do menino
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false;
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mouseX //prof: chamar primeiro o sprite.x e igualar com o comando do World.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
