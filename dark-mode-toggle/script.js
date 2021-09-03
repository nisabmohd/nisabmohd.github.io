var c=0;
let btn=document.getElementById('icon').addEventListener('click',()=>{
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
   document.body.style.backgroundColor=`rgb(22, 22, 22)`;
    for(let i=0;i<16;i++){
    note=document.querySelectorAll('.grid1')[i];
    note.style.color=`white`;
    }
}
function light(){
    c=0;
    document.getElementById('icon').innerHTML=`<img id="btn" src="dark-mode.png" alt="dark">`;
    document.body.style.backgroundColor=`white`;
    for(let i=0;i<16;i++){
    note=document.querySelectorAll('.grid1')[i];
    note.style.color=`black`;
    }
}
