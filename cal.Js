const history = [];
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            display.innerHTML = "0";

        } else if (value === "=") {
            try {
                const result = eval(display.innerText);
                display.innerText = result;

                history.push(result);
                console.table(history);
            } catch {
                display.innerText = "error";
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
