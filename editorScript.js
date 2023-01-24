// Creating Dragging functionality
const left = document.querySelector(".left"),
    right = document.querySelector(".right"),
    editor = document.querySelector(".editor"),
    run = document.querySelector(".btn-run"),
    iframe = document.querySelector(".iframe"),
    darkMode = document.querySelector(".btn-dark"),
    lightMode = document.querySelector(".btn-light");

// Run Btn event listner
run.addEventListener("click", () => {
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})

// setting dark mode
darkMode.addEventListener("click", () => {
    left.style.backgroundColor = "#282A35"
    left.style.color = "white"
})
// setting light mode
lightMode.addEventListener("click", () => {
    left.style.backgroundColor = "white"
    left.style.color = "black"
})
// live code
document.getElementById("live").onclick = function () {
    if (this.checked) {
        editor.addEventListener("keyup", () => {
            const html = editor.textContent;
            iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
        })
    }
}