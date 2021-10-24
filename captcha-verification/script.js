const arr=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",0,1,2,3,4,5,6,7,8,9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let str=''
window.onload=func();
refresh=document.getElementById('refresh').addEventListener('click',func)
function func(){
    str=''
    document.getElementById('done').innerHTML=`<p></p>` 
    let n=Math.floor(Math.random()*(6-5+1))+5;
    for(i=0;i<n;i++){
        str+=arr[Math.floor(Math.random()*61)]
    }
    document.getElementById('cap').innerHTML=str
}
let Checkbtn=document.getElementById('Checkbtn').addEventListener('click',()=>{
    let input=document.getElementById('input').value
    if(input==str){
        document.getElementById('done').innerHTML=`<p>Sucess!</p>` 
        document.getElementById('error').style.display="none" 
    }
    else{
        document.getElementById('done').style.display="none"
        document.getElementById('error').style.display="block"
    }
})
