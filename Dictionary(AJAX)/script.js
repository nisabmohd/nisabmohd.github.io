let search = document.getElementById('search').addEventListener('click', () => {
    let input = document.getElementById('input').value
    let word=document.getElementById('word').innerText=input
    let meaning=document.getElementById('meaning')
    let pos=document.getElementById('pos')
    let phonetics=document.getElementById('phonetics')
    let str=""
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`, true)

    xhr.getResponseHeader('content-type', 'application/json')

    xhr.onload = () => {
        let json = JSON.parse(xhr.responseText)
        json.forEach(element => {
            let ph=element.phonetic
            phonetics.innerHTML=`<h6>Phonetic:</h6><code class="mx-3 font-weight-bold">${ph}</code>`
            let meanings = element.meanings;
           meanings.forEach(element=>{
               let p=element.partOfSpeech
               pos.innerHTML=`<p>(${p})</p>`
           })
            meanings.forEach(element => {
                let def=element.definitions
                def.forEach(element=>{
                    let spdef=element.definition
                    str+=spdef
                    meaning.innerHTML=`<li>${str}</li>`
                   
                })
            });
        });
        
    }
    xhr.send();
})

