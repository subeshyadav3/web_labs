const box = document.getElementById('box');
const buttons = document.querySelectorAll(".button");

let calculation = '';
let history = []; 
let lastCalculation=false;

function Display(value){
    if(lastCalculation){
        calculation='';
        lastCalculation=false;
    }
    calculation += value;
    box.value = calculation;
}

function cal(){
    try {
        if (calculation === "") return;

        if (calculation.includes("/0")) {
            throw new Error("Division by zero");
        }

        if (calculation.includes("**") || calculation.includes("//")) {
            throw new Error("Invalid operator usage");
        }
        

        let result = eval(calculation);

        if (!isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        addToHistory(calculation + " = " + result);

        box.value = result;
        calculation = result.toString();
        lastCalculation=true;
    } catch (err) {
        alert("Invalid input: " + err.message);
        reset();
    }
}

function removeOne(){
    calculation = calculation.slice(0, -1);
    box.value = calculation;
}

function reset(){
    calculation = '';
    box.value = '';
}

function addToHistory(entry){
    history.unshift(entry);

    if (history.length > 5) {
        history.pop(); 
    }

    renderHistory();
}

function renderHistory(){
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    history.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        historyList.appendChild(li);
    });
}

function clearHistory(){
    history = [];
    renderHistory();
}
