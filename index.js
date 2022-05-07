let currentCount = 0;
let countEl = document.getElementById("countPeople");
countEl.innerText = currentCount;
let count = () => {
    currentCount = parseInt(countEl.innerText) + 1;
    countEl.innerText = currentCount;
}
let reset = () => {
    currentCount = 0;
    countEl.innerText = currentCount;

}

let save = () => {
    document.getElementById("save-el").textContent += parseInt(countEl.innerText) + " - ";
    reset();
}