const counter=document.getElementById("count")
const startBtn=document.getElementById("start")
const endBtn=document.getElementById("stop")
const resetBtn=document.getElementById("reset")

let intervalId;
startBtn.onclick=function(){
    intervalId=setInterval(()=>{
        let count=Number(counter.value);
        ++count;
        counter.value=count;
    },1000)
}
endBtn.onclick=function(){
    clearInterval(intervalId);
}
resetBtn.onclick=function(){
    clearInterval(intervalId);
    counter.value=0;
}
