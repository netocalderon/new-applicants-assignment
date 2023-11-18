// Add your JavaScript here

const display = document.getElementById("inputBox");
const buttons = document.querySelectorAll(".number, .operator, #clear, #equal, #backspace");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                if (button.id === "clear") {
                    display.value = "";
                }
                else if (button.id === "equal") {
                    try {
                        display.value = eval(display.value);
                    }
                    catch (error) {
                        display.value = "Error!!!";
                    }
                } else if (button.id === "backspace") {
                    display.value = display.value.slice(0, -1);

                }
                else {
                    display.value += button.textContent;
                }
            });
        });