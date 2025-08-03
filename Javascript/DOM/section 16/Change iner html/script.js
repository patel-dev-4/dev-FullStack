// Store elements in variables
const div = document.querySelector("div");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

// Magic toggle function
function magic() {
    if (div.style.backgroundColor === "black") {
        div.style.backgroundColor = "white";
        button.style.backgroundColor = "black";
        button.style.color = "white";
    } else {
        div.style.backgroundColor = "black";
        button.style.backgroundColor = "white";
        button.style.color = "black";
    }
}

// Initial setup
h1.innerHTML = "Hello Dev Patel!!";
h1.style.backgroundColor = "seagreen";

// Add event listener (note: no parentheses after magic)
button.addEventListener("click", magic);
