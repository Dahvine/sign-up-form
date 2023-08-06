document.addEventListener("DOMContentLoaded", () => {
    let message = document.querySelector("#pswrd_checker");
    let input1 = document.querySelector("#input1");
    let input2 = document.querySelector("#input2");

    input2.addEventListener("input", () => {
        if (input2.value === "") {
            input2.style.border = "1px solid initial";
            message.textContent = ""; // Clear the error message when input is empty
        } else if (input1.value === input2.value) {
            input2.style.border = "1px solid green";
            message.textContent = ""; // Clear the error message if passwords match
        } else {
            input2.style.border = "1px solid red";
            message.textContent = "* Passwords do not match";
        }
    });

    input1.addEventListener("input", () => {
        input2.dispatchEvent(new Event('input')); // Trigger input event on input2 to recheck passwords
    });
});


