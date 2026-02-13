const btnColor = document.getElementById("btnColor");

btnColor.addEventListener("click", () => {
    const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hex = "#";

    // We need to loop 6 times to get 6 characters (e.g., #FFAA00)
    for (let i = 0; i < 6; i++) {
        // Pick a random index from 0 to 15
        let randomIndex = Math.floor(Math.random() * colors.length);
        hex += colors[randomIndex];
    }

    // Apply it to the body
    document.body.style.backgroundColor = hex;
    let hexCode = document.getElementById("hexCode");
    hexCode.innerText = hex;
    // Optional: Log it so you can see what's happening!
});