const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;
        if (value === "C") {
            display.innerHTML = "0";
        } else if (value === "=") {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "error"
            }
        } else {
            if (display.innerText === "0") {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        };
    });
});
