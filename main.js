

const decrease = document.getElementById("decrease");
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const label = document.getElementById('count');
let count = 0;

decrease.onclick = function() {
    count++;
    label.textContent = count;
}