let eml=document.getElementById("email");
let pas=document.getElementById("password");
let msge=document.getElementById("msge");
let msgp=document.getElementById("msgp");
let msgg=document.getElementById("msgg");
let array=[];
let a=false,b=false;
function func1(){
    if (/^[a-zA-Z0-9_]+@[a-zA-Z0-9]+[.][a-zA-Z0-9]+$/.test(eml.value)) {
        msge.innerHTML=``;
        a=true;
        if(a==true && b==true){
            msgg.innerHTML=`All good to go!`;
            msgg.style.color="#219F35";
        }
    }
    else{
       msge.innerHTML=`Make sure email is more than 3 characters and has @ and a .`;
msge.style.color="#FF0000";
msgg.innerHTML="";
a=false;
    }
}
function func2(){
    if (/^.{8,}$/.test(pas.value)) {
        msgp.innerHTML=``;
        b=true;
        if(a==true && b==true){
            msgg.innerHTML=`All good to go!`;
            msgg.style.color="#219F35";
        }
    }
    else{b=false;
        msgp.innerHTML=`Make sure password is more than 8 characters.`;
        msgp.style.color="#FF0000";
        msgg.innerHTML="";
    }
}
let btns=document.getElementById("sub");
btns.addEventListener("click",()=>{
    if (a==true && b==true) {
        let obj={};
        let id=1,email,password;
        obj.id=id;
        obj.email=eml.value;
        obj.password=pas.value;
        array.push(obj);
        id++;
        eml.value="";
        pas.value="";
        msgg.innerHTML="";
        alert("successful signup!"); 
        console.log("Updated Array",array);
    }
});
btns.addEventListener("mouseup",()=>{
    btns.style.backgroundColor="white";
    });
btns.addEventListener("mousedown",()=>{
        btns.style.backgroundColor="gray";
        });