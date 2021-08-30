
let t1, t2, c;
let p1 = document.getElementById('val').addEventListener('change', () => {
    let p = document.getElementById('val').value;
    console.log(p);
    if (p == "X") {
        document.getElementById('p2v2').innerText = 'O';
        t1 = 'X'; c = 0;
    }
    else {
        document.getElementById('p2v2').innerText = 'X';
        t1 = 'O'; c = 1;
    }
});
b1 = document.getElementById('btn1').addEventListener('click', func1);
b2 = document.getElementById('btn2').addEventListener('click', func2);
b3 = document.getElementById('btn3').addEventListener('click', func3);
b4 = document.getElementById('btn4').addEventListener('click', func4);
b5 = document.getElementById('btn5').addEventListener('click', func5);
b6 = document.getElementById('btn6').addEventListener('click', func6);
b7 = document.getElementById('btn7').addEventListener('click', func7);
b8 = document.getElementById('btn8').addEventListener('click', func8);
b9 = document.getElementById('btn9').addEventListener('click', func9);
function func1() {
    if (c == 0) {
        document.getElementById('btn1').innerHTML = "X";
        document.getElementById('btn1').disabled = true;
        c = 1;
    }
    else if (c == 1) {
        document.getElementById('btn1').innerHTML = "O";
        document.getElementById('btn1').disabled = true;
        c = 0;
    }
    check();
}
function func2() {
    document.getElementById('btn2').disabled = false;
    if (c == 0) {
        document.getElementById('btn2').innerHTML = "X";
        document.getElementById('btn2').disabled = true;
        c = 1;
    }
    else if (c == 1) {
        document.getElementById('btn2').innerHTML = "O";
        document.getElementById('btn2').disabled = true;
        c = 0;
    }
    check();
}
function func3() {
    document.getElementById('btn3').disabled = false;
    if (c == 0) {
        document.getElementById('btn3').innerHTML = "X";
        document.getElementById('btn3').disabled = true;
        c = 1;
    }
    else if (c == 1) {
        document.getElementById('btn3').innerHTML = "O";
        document.getElementById('btn3').disabled = true;
        c = 0;
    }
    check();
}
function func4() {
    document.getElementById('btn4').disabled = false;
    if (c == 0) {
        document.getElementById('btn4').innerHTML = "X";
        document.getElementById('btn4').disabled = true;
        c = 1;
    }
    else if (c == 1) {
        document.getElementById('btn4').innerHTML = "O";
        document.getElementById('btn4').disabled = true;
        c = 0;
    }
    check();
}
function func5() {
    document.getElementById('btn5').disabled = false;
    if (c == 0) {
        document.getElementById('btn5').innerHTML = "X";
        document.getElementById('btn5').disabled = true;
        c = 1;
    }
    else if (c == 1) {
        document.getElementById('btn5').innerHTML = "O";
        document.getElementById('btn5').disabled = true;
        c = 0;
    }
    check();
}
function func6() {
    document.getElementById('btn6').disabled = false;
    if (c == 0) {
        document.getElementById('btn6').innerHTML = "X";
        document.getElementById('btn6').disabled = true;
        c = 1;
    }
    else if (c == 1) {
        document.getElementById('btn6').innerHTML = "O";
        document.getElementById('btn6').disabled = true;
        c = 0;
    }
    check();
}
function func7() {
    document.getElementById('btn7').disabled = false;
    if (c == 0) {
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn7').innerHTML = "X";
        c = 1;
    }
    else if (c == 1) {
        document.getElementById('btn7').innerHTML = "O";
        document.getElementById('btn7').disabled = true;
        c = 0;
    }
    check();
}
function func8() {
    document.getElementById('btn8').disabled = false;
    if (c == 0) {
        document.getElementById('btn8').innerHTML = "X";
        document.getElementById('btn8').disabled = true;
        c = 1;
    }
    else if (c == 1) {
        document.getElementById('btn8').innerHTML = "O";
        document.getElementById('btn8').disabled = true;
        c = 0;
    }
    check();
}
function func9() {
    document.getElementById('btn9').disabled = false;
    if (c == 0) {
        document.getElementById('btn9').innerHTML = "X";
        document.getElementById('btn9').disabled = true;
        c = 1;
    }
    else if (c == 1) {
        document.getElementById('btn9').innerHTML = "O";
        document.getElementById('btn9').disabled = true;
        c = 0;
    }
    check();
}
function check() {
    btn1 = document.getElementById('btn1').innerHTML;
    btn2 = document.getElementById('btn2').innerHTML;
    btn3 = document.getElementById('btn3').innerHTML;
    btn4 = document.getElementById('btn4').innerHTML;
    btn5 = document.getElementById('btn5').innerHTML;
    btn6 = document.getElementById('btn6').innerHTML;
    btn7 = document.getElementById('btn7').innerHTML;
    btn8 = document.getElementById('btn8').innerHTML;
    btn9 = document.getElementById('btn9').innerHTML;

    console.log(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9);


    if (btn1 == "X" || btn1 == "O") {
        if (btn1 == btn2 && btn2 == btn3 && btn3 === btn1) {
            document.getElementById('btn1').disabled = true;
            document.getElementById('btn2').disabled = true;
            document.getElementById('btn3').disabled = true;
            document.getElementById('btn4').disabled = true;
            document.getElementById('btn5').disabled = true;
            document.getElementById('btn6').disabled = true;
            document.getElementById('btn7').disabled = true;
            document.getElementById('btn8').disabled = true;
            document.getElementById('btn9').disabled = true;
            setInterval(() => {
                document.getElementById('btn1').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn2').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn3').style.background = "rgb(71, 68, 68)";
                clearTimeout(100);
            }, 10)

        }
    }

    if (btn4 == "X" || btn4 == "O") {
        if (btn4 == btn5 && btn5 == btn6 && btn6 === btn4) {
            document.getElementById('btn1').disabled = true;
            document.getElementById('btn2').disabled = true;
            document.getElementById('btn3').disabled = true;
            document.getElementById('btn4').disabled = true;
            document.getElementById('btn5').disabled = true;
            document.getElementById('btn6').disabled = true;
            document.getElementById('btn7').disabled = true;
            document.getElementById('btn8').disabled = true;
            document.getElementById('btn9').disabled = true;
            setInterval(() => {
                document.getElementById('btn4').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn5').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn6').style.background = "rgb(71, 68, 68)";
            }, 10)

        }
    }

    if (btn7 == "X" || btn7 == "O") {
        if (btn7 == btn8 && btn8 == btn9 && btn9 === btn7) {
            document.getElementById('btn1').disabled = true;
            document.getElementById('btn2').disabled = true;
            document.getElementById('btn3').disabled = true;
            document.getElementById('btn4').disabled = true;
            document.getElementById('btn5').disabled = true;
            document.getElementById('btn6').disabled = true;
            document.getElementById('btn7').disabled = true;
            document.getElementById('btn8').disabled = true;
            document.getElementById('btn9').disabled = true;
            setInterval(() => {
                document.getElementById('btn7').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn8').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn9').style.background = "rgb(71, 68, 68)";
            }, 10)

        }
    }

    if (btn1 == "X" || btn1 == "O") {
        if (btn1 == btn4 && btn4 == btn7 && btn1 === btn7) {
            document.getElementById('btn1').disabled = true;
            document.getElementById('btn2').disabled = true;
            document.getElementById('btn3').disabled = true;
            document.getElementById('btn4').disabled = true;
            document.getElementById('btn5').disabled = true;
            document.getElementById('btn6').disabled = true;
            document.getElementById('btn7').disabled = true;
            document.getElementById('btn8').disabled = true;
            document.getElementById('btn9').disabled = true;
            setInterval(() => {
                document.getElementById('btn7').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn1').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn4').style.background = "rgb(71, 68, 68)";
                unbck();
            }, 10)

        }
    }

    if (btn2 == "X" || btn2 == "O") {
        if (btn2 == btn5 && btn8 == btn5 && btn8 === btn2) {
            document.getElementById('btn1').disabled = true;
            document.getElementById('btn2').disabled = true;
            document.getElementById('btn3').disabled = true;
            document.getElementById('btn4').disabled = true;
            document.getElementById('btn5').disabled = true;
            document.getElementById('btn6').disabled = true;
            document.getElementById('btn7').disabled = true;
            document.getElementById('btn8').disabled = true;
            document.getElementById('btn9').disabled = true;
            setInterval(() => {
                document.getElementById('btn2').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn8').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn5').style.background = "rgb(71, 68, 68)";
            }, 10)

        }
    }

    if (btn3 == "X" || btn3 == "O") {
        if (btn3 == btn6 && btn6 == btn9 && btn9 === btn3) {
            document.getElementById('btn1').disabled = true;
            document.getElementById('btn2').disabled = true;
            document.getElementById('btn3').disabled = true;
            document.getElementById('btn4').disabled = true;
            document.getElementById('btn5').disabled = true;
            document.getElementById('btn6').disabled = true;
            document.getElementById('btn7').disabled = true;
            document.getElementById('btn8').disabled = true;
            document.getElementById('btn9').disabled = true;
            setInterval(() => {
                document.getElementById('btn3').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn6').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn9').style.background = "rgb(71, 68, 68)";
            }, 10)

        }
    }

    if (btn1 == "X" || btn1 == "O") {
        if (btn1 == btn5 && btn5 == btn9 && btn9 === btn1) {
            document.getElementById('btn1').disabled = true;
            document.getElementById('btn2').disabled = true;
            document.getElementById('btn3').disabled = true;
            document.getElementById('btn4').disabled = true;
            document.getElementById('btn5').disabled = true;
            document.getElementById('btn6').disabled = true;
            document.getElementById('btn7').disabled = true;
            document.getElementById('btn8').disabled = true;
            document.getElementById('btn9').disabled = true;
            setInterval(() => {
                document.getElementById('btn1').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn5').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn9').style.background = "rgb(71, 68, 68)";
            }, 10)

        }
    }

    if (btn3 == "X" || btn3 == "O") {
        if (btn3 == btn5 && btn5 == btn7 && btn7 === btn3) {
            document.getElementById('btn1').disabled = true;
            document.getElementById('btn2').disabled = true;
            document.getElementById('btn3').disabled = true;
            document.getElementById('btn4').disabled = true;
            document.getElementById('btn5').disabled = true;
            document.getElementById('btn6').disabled = true;
            document.getElementById('btn7').disabled = true;
            document.getElementById('btn8').disabled = true;
            document.getElementById('btn9').disabled = true;
            setInterval(() => {
                document.getElementById('btn3').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn5').style.background = "rgb(71, 68, 68)";
                document.getElementById('btn7').style.background = "rgb(71, 68, 68)";

            }, 10)

        }
    }

}
