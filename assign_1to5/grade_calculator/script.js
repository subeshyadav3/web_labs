

const table = document.getElementById("result-table");

const students = [
    {
        name: "Subesh",
        marks: [75, 80, 70]
    },
    {
        name: "Saroj",
        marks: [45, 35, 30]
    },
    {
        name: "Sangam",
        marks: [90, 67, 92]
    }
];

students.forEach(student => {
    let total = student.marks.reduce((a, b) => a + b, 0);
    let percentage = total / student.marks.length;
    let grade = getGrade(percentage);
    let result = percentage >= 40 ? "Pass" : "Fail";

    let row = table.insertRow();
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.marks.join(", ")}</td>
        <td>${total}</td>
        <td>${percentage.toFixed(2)}%</td>
        <td>${grade}</td>
        <td>${result}</td>
    `;

    row.className = result === "Pass" ? "pass" : "fail";
});

function getGrade(percent) {
    if (percent >= 80) return "A";
    if (percent >= 60) return "B";
    if (percent >= 40) return "C";
    return "F";
}
