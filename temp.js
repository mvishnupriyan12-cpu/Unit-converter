const input1=document.getElementById("inputbox");
const fc=document.getElementById("fc");
const cf=document.getElementById("cf");
const ck=document.getElementById("ck");
const kc=document.getElementById("kc");
const fk=document.getElementById("fk");
const kf=document.getElementById("kf");

document.getElementById("convert").onclick=function(){
    let value=Number(input1.value);
    let result;
    if(fc.checked){
        result=(value - 32) * 5 / 9;
    }
    else if(cf.checked){
        result=(value * 9 / 5) + 32;
    }
    else if(ck.checked){
        result = value + 273.15;
    }
    else if(kc.checked){
        result = value - 273.15;
    }
    else if(fk.checked){
        result = (value - 32) * 5 / 9 + 273.15;
    }
    else if(kf.checked){
        result = (value - 273.15) * 9 / 5 + 32;
    }
    document.getElementById("answer").textContent=result.toFixed(3);
}