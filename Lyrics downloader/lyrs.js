let lyr=document.getElementById('lyr');

let search = document.getElementById('search').addEventListener('click', () => {
    let artist = document.getElementById('artist').value;
    let title = document.getElementById('title').value;
    ptr(artist,title);
});

let dbtn=document.getElementById('dbtn').addEventListener('click',()=>{
    let opt=document.getElementById('opt').value;
    let artist = document.getElementById('artist').value;
    let title = document.getElementById('title').value;
    dwn(artist,title,opt);
    
})



function ptr(a,b){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.lyrics.ovh/v1/${a}/${b}`, true)
    xhr.getResponseHeader('content-type', 'application/json')
    xhr.onload = () => {
        let json =JSON.parse(xhr.responseText)
        l=json.lyrics
        lyr.innerText=`${l}`
    }
    xhr.send();
}

function dwn(a,b,c){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.lyrics.ovh/v1/${a}/${b}`, true)
    xhr.getResponseHeader('content-type', 'application/json')
    xhr.onload = () => {
        let json =JSON.parse(xhr.responseText)
        l=json.lyrics
        if(c=="txt"){
            download(`${b}.txt`,`${l}`);
        }
        if(c=="lrc"){
            download(`${b}.txt`,`${l}`);
        }
    }
    xhr.send();
}




function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }