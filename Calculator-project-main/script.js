const arr=[];
function myFunc1(){
    const v=document.getElementById('1').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);
}
function myFunc2(){
    const v=document.getElementById('2').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);
}
function myFunc3(){
    const v=document.getElementById('3').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc4(){
    const v=document.getElementById('4').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc5(){
    const v=document.getElementById('5').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc6(){
    const v=document.getElementById('6').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc7(){
    const v=document.getElementById('7').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc8(){
    const v=document.getElementById('8').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc9(){
    const v=document.getElementById('9').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc10(){
    const v=document.getElementById('10').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc11(){
    const v=document.getElementById('11').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc12(){
    const v=document.getElementById('12').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc13(){
    const v=document.getElementById('13').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc14(){
    const v=document.getElementById('14').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc15(){
    const v=document.getElementById('15').innerHTML;
    console.log(v);
    document.getElementById('exp').append(v);}
function myFunc16(){
    document.getElementById('exp').innerText="";
    document.getElementById('res').innerText="";
}
function myFunc17(){
    let v=document.getElementById('exp').innerHTML;
    v=v.slice(0,v.length-1)
    document.getElementById('exp').innerHTML=v;
}
function myFunc18(){
    const r=document.getElementById('res').innerHTML;
    const v=document.getElementById('exp').innerHTML;
    let a=eval(v);
    document.getElementById('res').innerText=a;
}