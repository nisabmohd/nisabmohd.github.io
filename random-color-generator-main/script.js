let btn=document.getElementById('btn').addEventListener('click',()=>{
    let r=Math.round(Math.random()*255);
    let g=Math.round(Math.random()*255);
    let b=Math.round(Math.random()*255);
    document.querySelector('.container').style.background=`rgb(${r},${g},${b}`;
});
