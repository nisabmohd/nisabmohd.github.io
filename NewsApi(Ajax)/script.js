let newsAccordian = document.getElementById('newsAccordian')
let source = "bbc-news"
let api = "9dc9930c49714d2cac61612e6ae77e47"
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${api}`, true);
xhr.getResponseHeader('content-type', 'application/json');
let newsBody=""
xhr.onload = () => {
    if (xhr.status === 200) {
        json=JSON.parse(xhr.responseText);
        articles=json.articles;
        articles.forEach(function(element,index){
            let news =
                `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapseOne">
                        ${element.title}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                    data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        ${element.content.slice(0,185)} <a href="${element.url}">Read More...</a>
                        </div>
                    </div>
                </div>`

            newsBody+=news
            newsAccordian.innerHTML=newsBody



            console.log(element.title);
            console.log("  ");
            console.log(element.content)
            console.log("  ");




            
        });
    }
    else {
        console.log("error to find the file");
    }
}
xhr.send()

