let button = document.querySelectorAll("button");
let counter = document.getElementById("counter");
let count = 0;
button.forEach((btn) => {
    btn.addEventListener("click", () => {
        let value = btn.innerText.trim();
        if (value === "decrease") {
            count--;
        } else if (value === "Increase") {
            count++;
        } else {
            count = 0;
        }
        counter.innerText = count;
        counter.classList.remove("text-primary", "text-success");

        if (count < 0) {
            counter.classList.add("text-primary");
        } else if (count > 0) {
            counter.classList.add("text-success");
        }
    });
});