const button = document.getElementById("btn");

button.addEventListener("click", (e) => {
    butval = parseInt(button.innerHTML);
    console.log(butval);
    button.innerHTML=butval+1;
});
