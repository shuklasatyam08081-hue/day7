let count=0;
const button = document.getElementById("Click-button");
const countDisplay = document.getElementById("Count-display");
button.addEventListener("click", function() {

    count++;
    countDisplay.textContent = count;
});