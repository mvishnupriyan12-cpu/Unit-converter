const input1=document.getElementById("inputbox");
const mice=document.getElementById("mice");
const cemi=document.getElementById("cemi");
const ceme=document.getElementById("ceme");
const mece=document.getElementById("mece");
const meki=document.getElementById("meki");
const kime=document.getElementById("kime");
const kimi=document.getElementById("kimi");
const miki=document.getElementById("miki");
const memi=document.getElementById("memi");
const mime=document.getElementById("mime");

document.getElementById("convert").onclick=function(){
    let value=Number(input1.value);
    let result;
    if(mice.checked){
        result = value / 10;
    }
    else if(cemi.checked){
        result = value * 10;
    }
    else if(ceme.checked){
        result = value / 100;
    }
    else if(mece.checked){
        result = value * 100;
    }
    else if(meki.checked){
        result = value / 1000;
    }
    else if(kime.checked){
        result = value * 1000;
    }
    else if(kimi.checked){
        result = value * 0.621371;
    }
    else if(miki.checked){
        result = value / 0.621371;
    }
    else if(memi.checked){
        result = value / 1609.34;
    }
    else if(mime.checked){
        result = value * 1609.34;
    }
    document.getElementById("answer").textContent=result.toFixed(3);
}