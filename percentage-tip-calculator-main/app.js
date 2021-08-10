let btn=document.getElementById('calculate').addEventListener('click',()=>{
    let data=document.getElementById('input').value;
    let tip=document.getElementById('tip').value;
    let result=(data-(data-(data*tip/100))).toFixed(2);
    document.querySelector('.result').innerHTML='Result : '+result;

});