const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
const res = document.getElementById("res");
var nextStep = false;
function decimal(bin){
    let dec = parseInt(bin, 2);
    return dec;
}

function binary(decimal){
    let bin = decimal.toString(2);
    return bin;
}

btn1.addEventListener('click', (_e) => {
    res.innerHTML += '1';
})


btn0.addEventListener('click', (_e) => {
    res.innerHTML += '0';
})

btnClr.onclick = (_e) => {
    res.innerHTML = "";
}

btnEql.onclick = (_e) => {
    let dec1 = parseInt(op1, 2);
    let dec2 = parseInt(res.innerHTML.split(operation)[1], 2);
    let results = eval(dec1+operation+dec2);
    res.innerHTML = results.toString(2);
}
var op1,operation;
btnSum.onclick = (_e) => {
    if (!op1){
        op1 = res.innerHTML;
    }
    operation = "+";
    res.innerHTML += "+";
}

btnDiv.onclick = (_e) => {
    if (!op1){
        op1 = res.innerHTML;
    }
    operation = "/";
    res.innerHTML += "/";
}
btnSub.onclick = (_e) => {
    if (!op1){
        op1 = res.innerHTML;
    }
    operation = "-";
    res.innerHTML += "-";
}
btnMul.onclick = (_e) => {
    if (!op1){
        op1 = res.innerHTML;
    }
    operation = "*";
    res.innerHTML += "*";
}
