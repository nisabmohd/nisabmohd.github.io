let btn = document.querySelector('#btn').addEventListener('click', () => {
    input = document.querySelector('#input').value;
    const ones = ["", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
        "Sixteen", "Seventeen", "Eighteen", "Nineteen"]

    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty",
        "Sixty", "Seventy", "Eighty", "Ninety"]

    if (input < 20) {
        console.log(ones[input]);
        document.querySelector('.output').innerHTML = `<p>${ones[input]}</p>`
    }

    if (input.length == 2 && input > 19) {
        t1 = input.slice(0, 1)
        t2 = input.slice(1, 2)
        document.querySelector('.output').innerHTML = `<p>${tens[t1] + " " + ones[t2]}</p>`
    }
    if (input.length == 3) {
        t1 = input.slice(0, 1)
        t2 = input.slice(1, 2)
        t3 = input.slice(2, 3)
        document.querySelector('.output').innerHTML = `<p>${ones[t1] + " hundred " + tens[t2] + " " + ones[t3]}</p>`
    }
    if (input.length == 4) {
        t1 = input.slice(0, 1)
        t2 = input.slice(1, 2)
        t3 = input.slice(2, 3)
        t4 = input.slice(3, 4)
        if(t4==0){
            document.querySelector('.output').innerHTML = `<p>${ones[t1] + " thousand " + ones[t2] + " " + ones[t4]}</p>`
        }
        if(t3==0 && t4==0){
            document.querySelector('.output').innerHTML = `<p>${ones[t1] + " thousand " + ones[t2] + " hundred " + ones[t4]}</p>`
        }
        if(t3==0 && t2==0){
            document.querySelector('.output').innerHTML = `<p>${ones[t1] + " thousand " + ones[t2] + " " + ones[t4]}</p>`
        }
        else{
            document.querySelector('.output').innerHTML = `<p>${ones[t1] + " thousand " + ones[t2] + " hundred " + tens[t3] + " " + ones[t4]}</p>`
        }
    }
    if(input>9999){
        alert("enter with in range of 9999")
    }
})