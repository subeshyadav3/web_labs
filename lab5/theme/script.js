
const defaultTheme = {
    background: "#f1f5f9",
    text: "#0f172a",
    button: "#6366f1"
};


let theme = { ...defaultTheme };


const bgInput = document.getElementById("bgColor");
const textInput = document.getElementById("textColor");
const btnInput = document.getElementById("btnColor");

const actionBtn = document.getElementById("actionBtn");
const resetBtn = document.getElementById("resetBtn");
const textInputSample = document.getElementById("textInput");
const previewText = document.getElementById("previewText");


function applyTheme() {
    document.body.style.background = theme.background;
    document.body.style.color = theme.text;
    actionBtn.style.background = theme.button;
}

function applyTheme() {
    document.body.style.background = theme.background;
    document.body.style.color = theme.text;
    actionBtn.style.background = theme.button;
    previewText.style.color = theme.text;
}
textInputSample.addEventListener("input", (e) => {
    previewText.textContent = e.target.value || "Your text will appear here";
});


bgInput.addEventListener("input", (e) => {
    theme.background = e.target.value;
    applyTheme();
});

textInput.addEventListener("input", (e) => {
    theme.text = e.target.value;
    applyTheme();
});

btnInput.addEventListener("input", (e) => {
    theme.button = e.target.value;
    applyTheme();
});


resetBtn.addEventListener("click", () => {
    theme = { ...defaultTheme };
    applyTheme();


    bgInput.value = defaultTheme.background;
    textInput.value = defaultTheme.text;
    btnInput.value = defaultTheme.button;
});

applyTheme();
