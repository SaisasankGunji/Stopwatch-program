const display=document.getElementById("display");
let timer;
let startTime=0;
let elapsedTime=0;
let isRunning=false;

document.getElementById("start").onclick=function(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10);
        isRunning=true;
    }
}
document.getElementById("stop").onclick=function(){
    if(isRunning){
        clearInterval(timer)
        elapsedTime=Date.now()-startTime;
        isRunning=false;
    }
}
document.getElementById("reset").onclick=function(){
    clearInterval(timer)
    startTime=0;
    elapsedTime=0;
    isRunning=false
    display.textContent="00:00:00:00"
}
function update(){
    let currentTime=Date.now();
    elapsedTime=currentTime-startTime;
    let hrs=Math.floor(elapsedTime/(1000*60*60)).toString().padStart(2,0)
    let mins=Math.floor(elapsedTime/(1000*60)%60).toString().padStart(2,0)
    let secs=Math.floor(elapsedTime/(1000)%60).toString().padStart(2,0)
    let ms=Math.floor((elapsedTime%1000)/10).toString().padStart(2,0)

    display.textContent=`${hrs}:${mins}:${secs}:${ms}`;
}
