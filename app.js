let gameseq =[];
let userseq=[];
let level =0;
let started =false;
let h2 = document.querySelector('h2');
let btns =["red","yellow","green","purple"];

function gameflash(btn){
    
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },450);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },450);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;
    let randIDX = Math.floor(Math.random()*3);
    let randcolor = btns[randIDX];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);

    console.log(gameseq);
    gameflash(randbtn);
}

function checkAns(idx){
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length===gameseq.length){

            levelUp();
        }
        

    }else{
        h2.innerText = `Game over!!!!!`;
        document.querySelector("body").style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor='white';
        },2000);
        reset();
        
    }
}

document.addEventListener("keypress",function(){
    
    if(started ==false){
        console.log("game has started");
        started =true;
        setTimeout( levelUp(),1000);
    }
});
function btnpress(){
    let btn =this;
    console.log(this);
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkAns(userseq.length-1);
    
}


let allbtns =document.querySelectorAll(".btn");
for(btun of allbtns){
    btun.addEventListener("click",btnpress);
}
function reset(){
    started =false;
    gameseq=[];
    userseq=[];
    level =0;
}