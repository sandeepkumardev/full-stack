const root = document.getElementById("container");
const btn = document.getElementById("add");

btn.addEventListener("click", () => {
  const progress = document.createElement("progress");
  progress.max = 100;
  progress.value = 0;

  let intervalId = setInterval(() => {
    progress.value += 1;

    if (progress.value === 100) {
      clearInterval(intervalId);
    }
  }, 20);

  root.appendChild(progress);
});

let time = document.createElement("p");
time.innerText = new Date(Date.now()).toLocaleTimeString();
setInterval(() => {
  time.innerText = new Date(Date.now()).toLocaleTimeString();
}, 1000);
root.innerHTML = time;
