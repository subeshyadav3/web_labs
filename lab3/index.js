const table = document.getElementById("table");

const students = [
    { name: "John Doe", age: 18, grade: "A", subject: "Math" },
    { name: "Jane Smith", age: 19, grade: "B", subject: "Science" },
    { name: "Alice Johnson", age: 17, grade: "A+", subject: "English" },
    { name: "Bob Brown", age: 18, grade: "C", subject: "History" },
];

const tableRow=document.createElement("tr");

const title=["Name","Age","Grade","Subject"];
title.forEach(title => {
    const th=document.createElement("th");
    th.setAttribute("class","table-header");
    th.innerText=title;
    tableRow.appendChild(th);
});

table.appendChild(tableRow);


students.forEach((student,idx) => {
    const row = document.createElement("tr");
    Object.values(student).forEach(value => {
        const cell = document.createElement("td");
        cell.setAttribute("class","table-data");

        cell.innerText = value;
        row.appendChild(cell);
    });
    row.style.backgroundColor = idx % 2 === 0 ? "#f2f2f2" : "#ffffff";
    table.appendChild(row);
});

table.addEventListener("click", (e) => {
    if(e.target.className=='table-data'){
        const ask=prompt("Do you want to change it? (yes/no)");
        if(ask.toLowerCase()=='yes'){
            const newValue=prompt("Enter new value:");
            e.target.innerText=newValue;
        }
    }
    console.log(e.target.className)
});