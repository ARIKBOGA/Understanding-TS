const button = document.querySelector("button")!;

button.addEventListener("click", () => {
    button.textContent = "Clicked!";
    button.style.backgroundColor = "gray";
    console.log("Clicked!");
});

const map = new Map();

map.set("name", "Max");
map.set("age", 30);