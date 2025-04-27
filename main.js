
// STEP 1. CREATE THREE CONSTANTS
//         AND ASSIGN VALUES TO THEM. TO ACCOMPLISH THIS
//         USE THE BUILT-IN DOCUMENT.GETELE,ENTBYID METHOD

const decrease = document.getElementById("decrease");
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const label = document.getElementById('count');

// STEP 2. CREATE A VARIABLE THAT WILL HOLD THE VALUES
//         OF THE LABEL

let count = 0;

// STEP 3. CREATE THREE FUNCTIONS TO INCREASE, DECREASE, AND RESET
//         THE COUNT.

decrease.onclick = function() {
    count--;
    label.textContent = count;
}

increase.onclick = () => {
    count++;
    label.innerHTML = count;
}

reset.onclick = () => {
    count = 0;
    label.textContent = count;
}