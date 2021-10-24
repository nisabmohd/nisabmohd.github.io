let a = 0
let b = 0

function pop() {
  
    if (b == 0) {
        setTimeout(() => {
            document.title = "You won an iphone";
            alert("📱📱You won an iphone 📱📱")
        }, 10000);
       
        b = b + 1;
    }
if (b >= 1) {
    setInterval(()=>{
        document.querySelector('.alert3').style.display="block"
        document.querySelector('.alert2').style.display="block"
        document.querySelector('.alert1').style.display="block"
        disapper();
    },5500) 
}
}
function disapper(){
    setTimeout(()=>{
        document.querySelector('.alert3').style.display="hidden"
        document.querySelector('.alert2').style.display="none"
        document.querySelector('.alert1').style.display="none"
    },5000)
    
}


function fire() {
    if (a == 0) {
        window.open('https://nisabmohd.github.io/portfolio-website/home.html', '_blank');
        a = a + 1
        return false
    }
    if (a == 1) {
        window.open('https://github.com/nisabmohd', '_blank');
        a = a + 1
        return false
    }
    if (a == 2) {
        window.open('https://nisabmohd.github.io/', '_blank');
        a = a + 1
        return false
    }
    if (a == 3) {
        return false;
    }
}
