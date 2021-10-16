
get('all')

let btn=document.getElementById('btn').addEventListener('click',()=>{
    let values=document.getElementById('values').value
    get(values)
})


function get(a) {
    const xhr = new XMLHttpRequest();
    let spin = document.getElementById('spin');
    let mbody = document.getElementById('mbody');
    xhr.open('GET', `https://inshortsapi.vercel.app/news?category=${a}`, true)
    xhr.getResponseHeader('content-type', 'application/json');
    xhr.onprogress = () => {
        spin.style.display = "block"
    }
    xhr.onload = () => {
        spin.style.display = "none"
        let str = ''
        let json = JSON.parse(xhr.responseText);
        let data = json.data;
        data.forEach(element => {
            str = str + ` <div class="col">
            <div class="card my-3" id="user2" style="width: 40rem;">
                <span class="badge bg-secondary date">${element.date}</span>
                <span class="badge bg-success aut">Author: ${element.author}</span>
                <img src="${element.imageUrl}"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title" style="font-weight: bolder;">${element.title.slice(0, 45)}...</h5>
                    <p class="card-text">${element.content.slice(0, 199)}...</p>
                    <a href="${element.readMoreUrl}" class="btn btn-outline-secondary d-flex justify-content-center">Read more
                        ...</a>
                </div>
            </div>
        </div>`
        });

        mbody.innerHTML = str
    }
    xhr.send();
}
