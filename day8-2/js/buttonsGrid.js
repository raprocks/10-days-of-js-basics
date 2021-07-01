const btn5 = document.getElementById("btn5");

const btn1 =document.getElementById("btn1");
const btn2 =document.getElementById("btn2");
const btn3 =document.getElementById("btn3");
const btn4 =document.getElementById("btn4");
const btn6 =document.getElementById("btn6");
const btn7 =document.getElementById("btn7");
const btn8 =document.getElementById("btn8");
const btn9 =document.getElementById("btn9");

let btnarr = [btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4, btn1];

function rotateButtons(){
    let temp = btnarr[1].innerHTML;
    let temp2;
    btnarr[1].innerHTML = btnarr[0].innerHTML;
    for (let i = 1; i<btnarr.length-1; i++){
        temp2 = btnarr[i+1].innerHTML;
        btnarr[i+1].innerHTML = temp;
        temp = temp2;
    }
}

btn5.onclick = (_e) => {
    console.log("click");
    rotateButtons();
};


