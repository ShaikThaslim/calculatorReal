let text=document.querySelector("#id1");

let ac=document.querySelector("#AC");
ac.addEventListener("click",()=>{
    text.value="";
});

let del=document.querySelector("#Del");
del.addEventListener("click",()=>{
     text.value=text.value.slice(0,-1);
});

let equal=document.querySelector("#equal");
equal.addEventListener("click",()=>{
    text.value=eval(text.value);
})

let btns=document.querySelectorAll("button")
for(let i=2;i<=17;i++){
btns[i].addEventListener("click",()=>{
if(btns[i].value>=0 && btns[i].value<=9)
{
    if(text.value=="0"){
        text.value=btns[i].value;
            }
            else{
                text.value+=btns[i].value;
            }
}

else{
text.value+=btns[i].value;
}

})
}