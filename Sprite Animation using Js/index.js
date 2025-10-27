const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
const CANVAS_WIDTH=canvas.width=600;
const CANVAS_HEIGHT=canvas.height=600;


//Actions
let playerAnimation='run';
const playerState=document.getElementById('Actions');
playerState.addEventListener('change',(e)=>{
    playerAnimation=e.target.value;
})

//creating sprite image 
const playerImage=new Image();
playerImage.src='shadow_dog.png';
const spriteWidth=575;
const spriteHeight=523;

let gameFrame=0;
const staggerFrames=5;

//array
const spriteAnimations=[

];

const animationStates=[
      {
    name:'idle',
    frames:7
  },
  {
    name:'jump',
    frames:7
  },
  {
    name:'fall',
    frames:7
  },
  {
    name:'run',
    frames:9
  },
  {
    name:'dizzy',
    frames:11
  },
  {
    name:'sit',
    frames:5
  },
  {
    name:'roll',
    frames:7
  },
  {
    name:'bite',
    frames:7
  },
  {
    name:'ko',
    frames:12
  },
  {
    name:'getHit',
    frames:4
  }
];

animationStates.forEach((state,index)=>{
    let frames={
        loc:[]
    }
    for(let j=0;j<state.frames;j++){
        let positionX=j * spriteWidth;
        let positionY=index * spriteHeight;
        frames.loc.push({x: positionX,y: positionY});
    }
    spriteAnimations[state.name]=frames;
});
console.log(animationStates);
console.log(spriteAnimations);
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_WIDTH);
    // ctx.fillRect(100,50,100,100);
    //ctx.drawImgae(image,sx,sy,swidth,sheight,dx,dy,dwidth,dheight)
    //s for source and d for destination
    //it help it to make cyclic or to keep it in range
    let position=Math.floor(gameFrame/staggerFrames)%spriteAnimations[playerAnimation].loc.length;
    let frameX=spriteWidth*position;
    let frameY=spriteAnimations[playerAnimation].loc[position].y;
    ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    

    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
