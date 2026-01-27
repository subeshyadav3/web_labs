const rows=document.getElementById("rows");
const cols=document.getElementById("cols");
const generateBtn=document.getElementById("generateBtn");
const tableContainer=document.getElementById("tableContainer");
const addRowBtn=document.getElementById("addRowBtn");
const removeRowBtn=document.getElementById("removeRowBtn");
const highlightEvenBtn=document.getElementById("highlightEvenBtn");

generateBtn.addEventListener('click',()=>{
    const table=document.querySelector("table");
    if(table){
        tableContainer.removeChild(table);
    }
    const r=parseInt(rows.value);
    const c=parseInt(cols.value);
    const newTable=document.createElement("table");
    newTable.setAttribute("id","table");
    for(let i=0;i<r;i++){
        const tr=document.createElement("tr");
        tr.setAttribute("class",`${i===0?'header':'row'}`);
        for(let j=0;j<c;j++){
            const td=document.createElement("td");
            td.setAttribute("class",'cell');
            td.textContent=`Row ${i+1} Col ${j+1}`;
            tr.appendChild(td);
        }
        newTable.appendChild(tr);
    }
    tableContainer.appendChild(newTable);

})

addRowBtn.addEventListener('click',()=>{
    const table=document.getElementById("table");
    if(!table)return;
    console.log(table)
    const colsCount=table.rows[0].cells.length;
    const newRow=document.createElement("tr");
    newRow.setAttribute("class",'row');
    const currentRowCount=table.rows.length;
    for(let j=0;j<colsCount;j++){
        const td=document.createElement("td");
        td.setAttribute("class",'cell');
        td.textContent=`Row ${currentRowCount+1} Col ${j+1}`;
        newRow.appendChild(td);
    }
    table.appendChild(newRow);
});


removeRowBtn.addEventListener('click',()=>{
    const table=document.getElementById("table");
    if(!table||table.rows.length===0)return;
    table.deleteRow(table.rows.length-1);
}
);

highlightEvenBtn.addEventListener('click',()=>{
    const table=document.getElementById("table");
    if(!table)return;
    for(let i=0;i<table.rows.length;i++){
        if(i%2===1){
            table.rows[i].style.backgroundColor="skyblue";
        }else{
            table.rows[i].style.backgroundColor="";
        }
    }
}
);