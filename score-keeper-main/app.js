let t;
function func() {
    let select = document.getElementById('select').value;
    t = select;

}


let a = 0;
let plus1 = document.querySelector('.plus1').addEventListener('click', () => {
    a = a + 1;
   if(a <= t) {
        if (b != t) {
            document.querySelector('.score1').innerHTML = a;
            if (a == t && b < a) {
                document.querySelector('.score1').style.color = 'red';
                document.getElementById('btn2').disabled=true;
            }
            else{
                
                document.querySelector('.score1').style.color = 'black';
            }
        }
       
    }
    
});
let minus1 = document.querySelector('.minus1').addEventListener('click', () => {
    a = a - 1;
    if (a >= 0) {
        if(a<t){

            document.querySelector('.score1').innerHTML = a;
            document.querySelector('.score1').style.color = 'black';
        }
    }
    if(b!=t){
        document.getElementById('btn2').disabled=false;
    }

});


let b = 0;
let plus2 = document.querySelector('.plus2').addEventListener('click', () => {
    b = b + 1;
    if(b <= t) {
        if (a != t) {
            document.querySelector('.score2').innerHTML = b;
            if (b == t && a < b) {
                document.querySelector('.score2').style.color = 'red';
                document.getElementById('btn1').disabled=true;
            }
            else{
                
                document.querySelector('.score2').style.color = 'black';
            }
        }

    }
    
});
let minus2 = document.querySelector('.minus2').addEventListener('click', () => {
    b = b - 1;
    if (b >= 0) {
        if(b<t){

            document.querySelector('.score2').innerHTML = b;
            document.querySelector('.score2').style.color = 'black';
        }
    }
    if(a!=t){
        document.getElementById('btn1').disabled=false;
    }
});


let reset = document.getElementById('reset').addEventListener('click', () => {
    document.querySelector('.score1').innerHTML = 0;
    document.querySelector('.score2').innerHTML = 0;
    a = 0;
    b = 0;
    document.querySelector('.score1').style.color = 'black';
    document.querySelector('.score2').style.color = 'black';
    t = 0;
    document.getElementById('btn1').disabled=false;
    document.getElementById('btn2').disabled=false;
});