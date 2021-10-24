const xhr = new XMLHttpRequest();
let mbody = document.getElementById('mbody')
let str = ''
var timesRun = 0;
window.onload=()=>{a()}
function a(){
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 15){
      document.getElementById('next').style.display="block"
        clearInterval(interval);
    }
    meme();
}, 1000);
}

next=document.getElementById('next').addEventListener('click',()=>{
  timesRun=0
  a();
})

function meme() {
  xhr.open('GET', 'https://meme-api.herokuapp.com/gimme', true)
  xhr.getResponseHeader('content-type', 'application/json');
  xhr.onprogress = () => {
  }
  xhr.onload = () => {
    let json = JSON.parse(xhr.responseText);
    let meme = json.url
    let author = json.author
    str += `<div class="col my-2">
  <div class="card" style="width: 21.25rem;">
      <img src="${meme}" class="card-img-top" alt="...">
      <div class="card-body">
          <p class="card-text">Author: ${author}</p>
      </div>
  </div>
</div>
    `
    mbody.innerHTML = str
  }
  xhr.send();
  let btn = document.getElementById('btn').addEventListener('click', () => {
    location.reload();
  })
}