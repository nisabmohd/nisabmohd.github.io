let a = 0
let b = 0

function pop() {
  
    if (b == 0) {
        setTimeout(() => {
            document.title = "You won an iphone";
            alert("📱📱You won an iphone 📱📱")
        }, 2000);
       
        b = b + 1;
    }
    if (b == 1) {
        setTimeout(() => {
            document.title = "Buy now - click here";
            alert("Get your fat burned.....!!!! 🥵💪🥵")
        }, 2000);
        b = b + 1;
    }
if (b == 2) {
    setTimeout(() => {
        document.title = "1+ new notification ";
        alert("Get your fat burned.....!!!! 🥵💪🥵")
    }, 2000);
    b = b + 1;
}
if (b >= 3) {
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
        document.querySelector('.alert3').style.display="none"
        document.querySelector('.alert2').style.display="none"
        document.querySelector('.alert1').style.display="none"
    },3500)
    
}


function fire() {
    if (a == 0) {
        window.open('https://nisabmohd.github.io/portfolio-website/about.html', '_blank');
        a = a + 1
        return false
    }
    if (a == 1) {
        window.open('https://github.com/nisabmohd', '_blank');
        a = a + 1
        return false
    }
    if (a == 2) {
        window.open('https://nisabmohd.github.io/portfolio-website/blog.html', '_blank');
        a = a + 1
        return false
    }
    if (a == 3) {
        return false;
    }
}
