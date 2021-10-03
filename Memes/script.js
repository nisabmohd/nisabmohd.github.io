const xhr=new XMLHttpRequest();
let mbody=document.getElementById('mbody')
xhr.open('GET','https://meme-api.herokuapp.com/gimme',true)
xhr.getResponseHeader('content-type', 'application/json');
xhr.onload=()=>{
    let json=JSON.parse(xhr.responseText);
    let meme=json.url
    let author=json.author

    mbody.innerHTML=`<div class="card" style="width: 35rem;">
    <img src="${meme}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Author: ${author}</p>
    </div>
    </div>
    `
}
xhr.send();
let btn=document.getElementById('btn').addEventListener('click',()=>{
    location.reload();
})