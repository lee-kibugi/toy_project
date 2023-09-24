let basicSalary = prompt("Enter basic salary");
let benefits = prompt("Enter total benefits");

let grossSalary = basicSalary + benefits;

//PAYE
let paye = 0;
if(grossSalary > 800000){
    paye = grossSalary * 0.35
}else if(grossSalary > 500000 && grossSalary < 800001){
    paye = grossSalary * 0.325;
}else if(grossSalary > 32333 && grossSalary < 500001){
    paye = grossSalary * 0.3;
}else if(grossSalary > 24000 && grossSalary < 32334){
    paye = grossSalary * 0.25;
}else if(grossSalary < 240001){
    paye = grossSalary * 0.1;
}

//NSSF
let nssf = 0;
if(grossSalary > 18000){
    nssf = 720;
}else if(grossSalary > 5999 && grossSalary < 18000){
    nssf = 340;
}

//NHIF
let nhif;

if (grossSalary <= 5999) {
    nhif = 150;
} else if (grossSalary >= 6000 && grossSalary <= 7999) {
    nhif = 300;
} else if (grossSalary >= 8000 && grossSalary <= 11999) {
    nhif = 400;
} else if (grossSalary >= 12000 && grossSalary <= 14999) {
    nhif = 500;
} else if (grossSalary >= 15000 && grossSalary <= 19999) {
    nhif = 600;
} else if (grossSalary >= 20000 && grossSalary <= 24999) {
    nhif = 750;
} else if (grossSalary >= 25000 && grossSalary <= 29999) {
    nhif = 850;
} else if (grossSalary >= 30000 && grossSalary <= 34999) {
    nhif = 900;
} else if (grossSalary >= 35000 && grossSalary <= 39999) {
    nhif = 950;
} else if (grossSalary >= 40000 && grossSalary <= 44999) {
    nhif = 1000;
} else if (grossSalary >= 45000 && grossSalary <= 49999) {
    nhif = 1100;
} else if (grossSalary >= 50000 && grossSalary <= 59999) {
    nhif = 1200;
} else if (grossSalary >= 60000 && grossSalary <= 69999) {
    nhif = 1300;
} else if (grossSalary >= 70000 && grossSalary <= 79999) {
    nhif = 1400;
} else if (grossSalary >= 80000 && grossSalary <= 89999) {
    nhif = 1500;
} else if (grossSalary >= 90000 && grossSalary <= 99999) {
    nhif = 1600;
} else {
    nhif = 1700;
}


let netSalary = grossSalary - paye - nssf - nhif;

console.log("Gross Salary" + grossSalary);
console.log("PAYE: " + paye);
console.log("NSSF: " + nssf);
console.log("NHIF: " + nhif);
console.log("Net Salary: "+netSalary);
