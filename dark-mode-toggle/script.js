var c=0;
let btn=document.getElementById('btn').addEventListener('click',()=>{
   if(c==0){
    
       dark();

   }
   else if(c==1){
   
       light();
   }
});
function dark(){
    c=1;
    document.getElementById('icon').innerHTML=`<img id="btn" src="download.png" alt="light">`;
    document.getElementById('ctn').style.background=`rgb(22, 22, 22)`;
    for(let i=0;i<16;i++){
    note=document.querySelectorAll('.grid1')[i];
    note.style.color=`white`;
    }
}
function light(){
    c=0;
    document.getElementById('icon').innerHTML=`<img id="btn" src="dark-mode.png" alt="dark">`;
    document.getElementById('ctn').style.background=`white`;
    for(let i=0;i<16;i++){
    note=document.querySelectorAll('.grid1')[i];
    note.style.color=`black`;
    }
}
