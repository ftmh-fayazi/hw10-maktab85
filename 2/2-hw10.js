// 1
let ageTable = document.getElementById("age-table");
console.log("age Table", ageTable);

// 2
let ageTableLables = ageTable.querySelectorAll("label");
console.log("age Table Lables", ageTableLables);

// 3
let ageTableFirstTd = ageTable.querySelector("td");
console.log("age Table First Td", ageTableFirstTd);

// 4
let searchForm = document.querySelector(`[name="search"]`);
console.log("search Form", searchForm);

// 5
let searchFormFirstInput = searchForm.querySelector("input");
console.log("search Form First Input", searchFormFirstInput);

// 6
let searchFormLastInput = [...searchForm.querySelectorAll("input")].at(-1);
console.log("search Form Last Input", searchFormLastInput);
