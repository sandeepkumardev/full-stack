const bg = document.getElementById("bg");
const redbutton = document.getElementById("red")
const bluebutton = document.getElementById("blue")
const greenbutton = document.getElementById("green")
redbutton.addEventListener("click",() =>{
    bg.style.backgroundColor="red";
        });
        bluebutton.addEventListener("click",() =>{
            bg.style.backgroundColor="blue";
        });
        greenbutton.addEventListener("click",() => {
            bg.style.backgroundColor ="green";

        });
