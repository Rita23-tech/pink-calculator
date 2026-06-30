// Step 1: Grab the elements we need from the page
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Step 2: Loop through every button and "listen" for clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent; // what's written on the button, e.g. "7" or "+"

        if (value === "C") {
            // Clear button: wipe the display
            display.value = "";
        } else if (value === "=") {
            // Equals button: calculate the result
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else {
            // Any number or operator: add it to whatever is already on screen
            display.value += value;
        }
    });
});