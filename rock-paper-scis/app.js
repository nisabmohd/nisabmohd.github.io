let valp,valc,pp=0,cp=0;
let rock=document.getElementById('pimg1').addEventListener('click',func1);
let paper=document.getElementById('pimg2').addEventListener('click',func2);
let scis=document.getElementById('pimg3').addEventListener('click',func3);
function func1(){
    valp=1;
    document.getElementById('pimg2').style.border=`none`;
    document.getElementById('pimg3').style.border=`none`;
    document.getElementById('pimg1').style.border=`2px solid rgb(177,170,170)`;
    check();
}
function func2(){
    valp=2;check();
    document.getElementById('pimg1').style.border=`none`;
    document.getElementById('pimg3').style.border=`none`;
    document.getElementById('pimg2').style.border=`2px solid rgb(177,170,170)`;
}
function func3(){
    valp=3;check();
    document.getElementById('pimg2').style.border=`none`;
    document.getElementById('pimg1').style.border=`none`;
    document.getElementById('pimg3').style.border=`2px solid rgb(177,170,170)`;
}
function check(){
valc=Math.floor((Math.random() * 3) + 1);
border(valc);
if(valp==valc){
    document.getElementById("res").innerHTML="draw";
}
if(valp==1 && valc==2){
    document.getElementById("res").innerHTML="player won";
    pp++;
    document.getElementById("pr").innerHTML=pp;
}
if(valp==1 && valc==3){
    document.getElementById("res").innerHTML="player won";
    pp++;
    document.getElementById("pr").innerHTML=pp;
}
if(valp==2 && valc==1){
    document.getElementById("res").innerHTML="computer won";
    cp++;
    document.getElementById("cr").innerHTML=cp;
}
if(valp==2 && valc==3){
    document.getElementById("res").innerHTML="computer won";
    cp++;
    document.getElementById("cr").innerHTML=cp;
}
if(valp==3 && valc==1){
    document.getElementById("res").innerHTML="computer won";
    cp++;
    document.getElementById("cr").innerHTML=cp;
}
if(valp==3 && valc==2){
    document.getElementById("res").innerHTML="player won";
    pp++;
    document.getElementById("pr").innerHTML=pp;
}}
function border(b){
    if(b==1){
        document.getElementById('cimg2').style.border=`none`;
        document.getElementById('cimg3').style.border=`none`;
        document.getElementById('cimg1').style.border=`2px solid rgb(177,170,170)`;
    }
    else if(b==2){
        document.getElementById('cimg1').style.border=`none`;
        document.getElementById('cimg3').style.border=`none`;
        document.getElementById('cimg2').style.border=`2px solid rgb(177,170,170)`;
    }
    else if(b==3){
        document.getElementById('cimg2').style.border=`none`;
        document.getElementById('cimg1').style.border=`none`;
        document.getElementById('cimg3').style.border=`2px solid rgb(177,170,170)`;
    }
    else{

    }
}
