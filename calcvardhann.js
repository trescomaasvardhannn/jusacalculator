let button=document.getElementsByClassName('box');
let str="";

let btnArr=Array.from(button);
btnArr.forEach((e)=>{
    e.addEventListener("click",()=>calc(e));
    
})

let disp=document.getElementById("display");
function calc(e){
    console.log("h");
    if(e.innerHTML=='AC')
    {
        disp.textContent='';
        str='';
    }
    else if(e.innerHTML=='Back'){
        str=str.substring(0,str.length-1);
        disp.textContent=str;
    }
    else if(e.innerHTML=='='){
        str=eval(str);
        disp.textContent=str;
    }
    else if(e.innerHTML=='e')
    {
        str+="2.7182";
        disp.textContent=str;
    }
    else{
        str+= e.innerHTML;
        disp.textContent=str;
    }
}